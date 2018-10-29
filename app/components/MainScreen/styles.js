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
  },
  recommendation: {
    marginTop: 15,
    marginBottom: 15,
    color: "green",
    fontSize: 20
  }
};

export default StyleSheet.create(styles);
