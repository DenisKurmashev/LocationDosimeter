import Geocoder from "react-native-geocoder";

import { deepCopy, stringToNumber } from "./shared";
import { POLLUTION_DATA } from "@constants";

export const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export const getPollutionData = async ({ coords: { latitude, longitude } }) => {
  const COUNTRY_CODE = "BY";
  const lat = stringToNumber(latitude);
  const lng = stringToNumber(longitude);

  let result = {
    error: null,
    pollutionLevel: null,
    recommendations: null
  };

  const location = await Geocoder.geocodePosition({
    lat,
    lng
  });

  const { countryCode, country, locality } = location[0];

  console.log(location);

  if (countryCode !== COUNTRY_CODE) {
    result.error = `This service can't provide maintain for your country (${country}).`;
    return result;
  }

  for (item of POLLUTION_DATA) {
    const itemLat = stringToNumber(item.lat);
    const itemLng = stringToNumber(item.lng);

    let itemLocation = await Geocoder.geocodePosition({
      lat: itemLat,
      lng: itemLng
    });

    if (locality === itemLocation[0].locality) {
      result.pollutionLevel = item.value;
      break;
    }
  }

  return result;
};
