import Geocoder from "react-native-geocoder";

import { POLLUTION_DATA } from "@constants";

export const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export const getPollutionData = async ({ coords: { latitude, longitude } }) => {
  let { lat, lng } = POLLUTION_DATA[0];

  lat = parseFloat(lat);
  lng = parseFloat(lng);

  console.log(lat, lng);

  const result = await Geocoder.geocodePosition({
    lat,
    lng
  });

  console.log(result);
};
