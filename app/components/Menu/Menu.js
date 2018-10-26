import React, { Component } from "react";
import { Text, View } from "react-native";

import MenuItem from "./MenuItem/MenuItem";
import { MENU_ITEMS } from "./menuItems";
import styles from "./styles";

class Menu extends Component {
  shouldComponentUpdate() {
    return false;
  }

  _onPressItem = navigateTo => {
    this.props.jumpTo(navigateTo);
  };

  render() {
    console.log(this.props);

    return (
      <View style={styles.container} testID="main_screen_footer">
        {MENU_ITEMS.map((item, index) => (
          <MenuItem
            key={index}
            onPress={this._onPressItem}
            buttonText={item.buttonText}
            icon={item.icon}
            navigateTo={item.navigateTo}
          />
        ))}
      </View>
    );
  }
}

export default Menu;
