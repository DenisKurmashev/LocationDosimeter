import React, { PureComponent } from "react";
import { Text, View } from "react-native";

import { geolocation } from "@utils";
import styles from "./styles";

class MainScreen extends PureComponent {
  componentDidMount() {
    const { getCurrentPosition, getPollutionData } = geolocation;

    (async () => {
      const res = await getPollutionData({
        coords: { latitude: 55.817, longitude: 27.95 }
      });

      console.log(res);
    })();
  }

  render() {
    return <View style={styles.container} />;
  }
}

export default MainScreen;
