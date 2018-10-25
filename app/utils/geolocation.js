import Geocoder from "react-native-geocoder";

import { POLLUTION_DATA } from "@constants";

export const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export const getPollutionData = ({ coords }) => {
  console.log(coords);
};
