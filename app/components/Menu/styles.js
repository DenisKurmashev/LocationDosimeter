import { StyleSheet } from "react-native";

import DefaultStyles from "@constants/styles";

const PADDING = DefaultStyles.BOTTOM_SPACE || 10;

const styles = {
  container: {
    height: 54,
    backgroundColor: DefaultStyles.colors.footer,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: PADDING,

    ...DefaultStyles.getDefaultShadow()
  }
};

export default StyleSheet.create(styles);
