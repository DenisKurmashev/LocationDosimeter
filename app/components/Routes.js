import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import { MainScreen, Menu, MapScreen } from "@cmp";

const routes = {
  MainScreen: {
    screen: props => <MainScreen {...props} />
  },
  Map: {
    screen: props => <MapScreen {...props} />
  }
};

const routerConfig = {
  initialRouteName: "MainScreen",
  tabBarComponent: props => <Menu {...props} />
};

export default createBottomTabNavigator(routes, routerConfig);
