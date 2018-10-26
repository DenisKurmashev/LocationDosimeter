import { StyleSheet } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";

import DefaultStyles from "@constants/styles";

const PADDING = isIphoneX ? 32 : 12;

const styles = {
  container: {
    height: 54,
    backgroundColor: DefaultStyles.colors.footer,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 12,
    paddingBottom: PADDING
  }
};

export default StyleSheet.create(styles);
