import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { DefaultStyles } from "@constants";
import styles from "./styles";

class MenuItem extends PureComponent {
  _onPress = event => {
    const { onPress, navigateTo } = this.props;

    onPress(navigateTo);
  };

  render() {
    const { buttonText, icon } = this.props;

    return (
      <View style={styles.item}>
        <TouchableOpacity
          activeOpacity={DefaultStyles.ACTIVE_OPACITY}
          onPress={this._onPress}
        >
          <View style={styles.itemView}>
            <View>
              <Icon name={icon} size={20} style={styles.img} />
            </View>
            <View>
              <Text style={styles.itemViewText}>{buttonText}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MenuItem;
