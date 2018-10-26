import React, { PureComponent } from "react";
import { Text, View } from "react-native";

import styles from "./styles";

class Loader extends PureComponent {
  render() {
    const { text } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}> {text ? text : "Loading"} </Text>
      </View>
    );
  }
}

export default Loader;
