import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, Text, View } from "react-native";
import { useFocus } from "../../../hooks";
import { styles } from "./styles";

namespace TextInput {
  export interface Props extends Omit<RNTextInputProps, "selectionColor" | "underlineColorAndroid"> {
    accessibilityLabel: string;
  }
}

export const TextInput = ({ inputMode = "text", accessibilityLabel, ...props }: TextInput.Props) => {
  const inputFocus = useFocus();

  return (
    <View style={styles.textInput}>
      <Text style={styles.label}>{accessibilityLabel}</Text>
      <RNTextInput
        style={[styles.input, inputFocus.isFocused && styles.focus]}
        placeholderTextColor={"#a1a1aa"}
        inputMode={inputMode}
        {...props}
        {...inputFocus}
      />
    </ View>
  );
};
