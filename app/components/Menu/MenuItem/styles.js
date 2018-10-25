import { StyleSheet } from "react-native";

import DefaultStyles from "@constants/styles";

const styles = {
  item: {},
  itemView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  itemViewText: {
    fontSize: 10,
    color: DefaultStyles.colors.lightGray
  },
  img: {
    color: DefaultStyles.colors.lightGray
  }
};

export default StyleSheet.create(styles);
