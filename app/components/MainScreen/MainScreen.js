import React, { PureComponent } from "react";
import { Text, View } from "react-native";

import Loader from "@cmp/Loader/Loader";
import { geolocation } from "@utils";
import styles from "./styles";

class MainScreen extends PureComponent {
  state = {
    error: null,
    formattedAddress: null,
    pollutionLevel: null
  };

  async componentWillMount() {
    const {
      getCurrentPosition,
      getPollutionData,
      getGeocodePosition
    } = geolocation;

    let location;

    try {
      location = await getCurrentPosition();
    } catch (ex) {
      this.setState({ error: ex });
      return;
    }

    const coords = location.coords;
    const geocodePosition = await getGeocodePosition(coords);

    if (!geocodePosition) {
      this.setState({ error: location.error });
      return;
    }

    this.setState({ formattedAddress: geocodePosition.formattedAddress });

    const pollution = await getPollutionData({ coords });

    if (pollution.error) {
      this.setState({ error: pollution.error });
      return;
    }

    this.setState({ pollutionLevel: pollutionLevel.pollutionLevel });
  }

  render() {
    const { error, formattedAddress, pollutionLevel } = this.state;

    if (error) return <Loader text={error} />;

    return (
      <View style={styles.container}>
        <Text>{formattedAddress}</Text>
        <Text>Pollution level {pollutionLevel}</Text>
      </View>
    );
  }
}

export default MainScreen;
