import Geocoder from "react-native-geocoder";

import { deepCopy, stringToNumber } from "./shared";
import { POLLUTION_DATA } from "@constants";

const getGeocodePosition = async coords => {
  const NY = {
    lat: stringToNumber(coords.lat || coords.latitude),
    lng: stringToNumber(coords.lng || coords.longitude)
  };

  let geocodePositionResult;

  try {
    geocodePositionResult = await Geocoder.geocodePosition(NY);
  } catch (ex) {
    console.log(ex);
    return null;
  }

  return deepCopy(geocodePositionResult[0]);
};

export const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export const getPollutionData = async ({ coords }) => {
  const COUNTRY_CODE = "BY";

  let result = {
    error: null,
    pollutionLevel: null,
    recommendations: null
  };

  const location = await getGeocodePosition(coords);
  if (!location) {
    result.error = `Internal application error!`;
    return result;
  }
  const { countryCode, country, locality } = location;

  if (countryCode !== COUNTRY_CODE) {
    result.error = `This service can't provide maintain for your country (${country}).`;
    return result;
  }

  for (item of POLLUTION_DATA) {
    // item model - { name, lat, lng, value, date }
    let itemLocation = await getGeocodePosition(item);

    if (!itemLocation) {
      result.error = `Internal application error!`;
      return result;
    }

    if (locality === itemLocation.locality) {
      result.pollutionLevel = item.value;
      break;
    }
  }

  return result;
};
