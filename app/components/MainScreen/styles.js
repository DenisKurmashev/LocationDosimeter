import { StyleSheet } from "react-native";

import { DefaultStyles } from "@constants";

const margin = DefaultStyles.STATUS_BAR_HEIGHT + 10;

const styles = {
  container: {
    flex: 1,
    marginTop: margin,
    marginBottom: margin,
    alignItems: "center",
    justifyContent: "center"
  }
};

export default StyleSheet.create(styles);
