import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

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
    return (
      <View style={styles.container}>
        <MapView style={{ width: "100%", height: "100%" }} />
      </View>
    );
  }
}

export default MainScreen;
