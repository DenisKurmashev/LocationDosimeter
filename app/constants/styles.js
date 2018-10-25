export default {
  colors: {
    gray: "#1C1C1C",
    lightGray: "#424242",
    white: "#FFF",
    darkWhite: "#FAFAFA",
    red: "#972B2B",
    blue: "rgb(52, 110, 242)",

    header: "#FAFAFA",
    footer: "#FAFAFA"
  },

  FOOTER_ITEMS_MARGIN: 1,
  ACTIVE_OPACITY: 0.6,

  getDefaultShadow: () => ({
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: this.white,
    shadowOffset: { height: 0, width: 0 },

    elevation: 5
  })
};
