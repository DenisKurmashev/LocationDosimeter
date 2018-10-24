import React from "react";
import { createStackNavigator } from "react-navigation";

import { MainScreen } from "@cmp";

const routes = {
  MainScreen: {
    screen: props => <MainScreen {...props} />
  }
};

const routerConfig = {
  initialRouteName: "MainScreen",
  headerMode: "none"
};

export default createStackNavigator(routes, routerConfig);
