import React, { PureComponent } from "react";
import { Text, View } from "react-native";

import Loader from "@cmp/Loader/Loader";
import { geolocation } from "@utils";
import styles from "./styles";

class MainScreen extends PureComponent {
  state = {
    error: null,
    formattedAddress: null,
    pollutionLevel: null,
    date: null
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

    const { error, pollutionLevel, date } = await getPollutionData({ coords });

    if (error) {
      this.setState({ error });
      return;
    }

    this.setState({ pollutionLevel, date });
  }

  render() {
    const { error, formattedAddress, pollutionLevel, date } = this.state;

    if (error || !formattedAddress || !pollutionLevel || !date)
      return <Loader text={error} />;

    return (
      <View style={styles.container}>
        <Text style={styles.recommendation}>
          {pollutionLevel < 0.2
            ? "Optimal"
            : pollutionLevel < 0.5
              ? "Warning! We recommend to leave this place"
              : "Dangerous! You must go away!"}
        </Text>
        <Text>{formattedAddress}</Text>
        <Text>
          Pollution level {pollutionLevel} mS/H (micro Sievert in hour)
        </Text>
        <Text>[ {new Date(date).toLocaleDateString()} ]</Text>
      </View>
    );
  }
}

export default MainScreen;
