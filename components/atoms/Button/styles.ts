import { StyleSheet } from "react-native";
import { theme } from "../../../configs/theme";

export const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 48,
  },
  buttonText: {
    fontWeight: "700",
    lineHeight: 1,
  },
  primary: {
    backgroundColor: theme.light.primary,
  },
  primaryText: {
    color: "white",
  },
  secondary: {
    backgroundColor: "transparent",
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
  },
  secondaryText: {
    color: "#333",
  },
});
