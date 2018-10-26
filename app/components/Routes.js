import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import { MainScreen, Menu } from "@cmp";

const routes = {
  MainScreen: {
    screen: props => <MainScreen {...props} />
  }
};

const routerConfig = {
  initialRouteName: "MainScreen",
  tabBarComponent: props => <Menu {...props} />
};

export default createBottomTabNavigator(routes, routerConfig);
