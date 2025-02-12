import { Platform } from "react-native";

const light = {
  primary: "#000",
};

const dark = {
  primary: "#fff",
};

export const __size_1 = Platform.select({
  web: "1em",
  default: "16"
});

export const theme = {
  light,
  dark
};