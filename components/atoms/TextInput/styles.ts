import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  textInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  },
  label: {
    color: "#e5e7eb",
    ...Platform.select({
      web: {
        fontSize: "1em"
      },
      default: {
        fontSize: 16
      }
    })
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderColor: "#27272a",
    color: "#e5e7eb"
  },
  focus: {
    borderColor: "#e5e7eb"
  }
});
