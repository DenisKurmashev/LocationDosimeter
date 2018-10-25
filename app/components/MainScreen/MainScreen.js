import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

import { geolocation } from "@utils";
import styles from "./styles";

class MainScreen extends PureComponent {
  componentDidMount() {
    const { getCurrentPosition, getPollutionData } = geolocation;

    (async () => {
      await getPollutionData(await getCurrentPosition());
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
