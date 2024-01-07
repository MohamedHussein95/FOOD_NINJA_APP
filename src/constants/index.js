import { hp } from "../utils";

export { default as Colors } from "./colors";
export { default as Fonts } from "./fonts";

export const appName = "FoodNinja";
export const appDescription = "Your favorite foods";

export const logoStyles = {
  appName: {
    fontFamily: "viga_regular",
    fontSize: hp(6),
    letterSpacing: 0.5,
  },
  appDescription: {
    fontFamily: "inter_semiBold",
    fontSize: hp(2),
    letterSpacing: 1,
  },
  maskedContainer: {
    height: hp(7.5),
    flexDirection: "row",
    marginTop: -hp(3),
  },
  logo: {
    height: hp(20),
    aspectRatio: 1,
  },
};
