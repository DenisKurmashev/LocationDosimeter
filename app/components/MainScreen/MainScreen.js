import React, { PureComponent } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

class MainScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default MainScreen;
