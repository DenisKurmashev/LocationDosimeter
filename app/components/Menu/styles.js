import { StyleSheet } from "react-native";

import DefaultStyles from "@constants/styles";

const styles = {
  container: {
    height: 54,
    backgroundColor: DefaultStyles.colors.footer,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
};

export default StyleSheet.create(styles);
