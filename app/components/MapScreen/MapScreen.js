import React, { PureComponent } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

import Loader from "@cmp/Loader/Loader";
import { geolocation } from "@utils";
import styles from "./styles";

class MapScreen extends PureComponent {
  state = {
    userLocation: null,
    initialRegion: null,
    error: null
  };

  async componentDidMount() {
    const { getCurrentPosition } = geolocation;

    let location;

    try {
      location = await getCurrentPosition();
    } catch (ex) {
      this.setState({ error: ex });
      return;
    }

    const { latitude, longitude } = location.coords;

    const userLocation = {
      latitude: "53.350000",
      longitude: "32.067000"
    };
    // {
    //   latitude,
    //   longitude
    // };

    const initialRegion = {
      ...userLocation,
      latitudeDelta: 0.0622,
      longitudeDelta: 0.0421
    };

    this.setState({ userLocation, initialRegion });
  }

  render() {
    const { userLocation, initialRegion, error } = this.state;

    if (error) return <Loader text={error} />;
    if (!userLocation || !initialRegion) return <Loader />;

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={initialRegion}
          style={{ width: "100%", height: "100%" }}
        >
          <MapView.Marker coordinate={userLocation} />
        </MapView>
      </View>
    );
  }
}

export default MapScreen;
