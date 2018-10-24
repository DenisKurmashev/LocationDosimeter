import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

import styles from "./styles";

class MainScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={{ width: "100%", height: "100%" }} />
      </View>
    );
  }
}

export default MainScreen;
