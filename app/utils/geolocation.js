import Geocoder from "react-native-geocoder";

import { POLLUTION_DATA } from "@constants";

export const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export const getPollutionData = async ({
  coords: { latitude: lat, longitude: lng }
}) => {
  const COUNTRY_CODE = "BY";
  let result = {
    error: null,
    pollutionLevel: null,
    recommendations: null
  };

  try {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
  } catch (ex) {
    result.error = ex;
    return result;
  }

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
    let itemLat, itemLng;

    try {
      itemLat = parseFloat(item.lat);
      itemLng = parseFloat(item.lng);
    } catch (ex) {
      result.error = `Internal application error.`;
      return result;
    }

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
