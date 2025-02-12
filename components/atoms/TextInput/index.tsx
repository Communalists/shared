import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native";
import { useFocus } from "@/shared/hooks";
import { styles } from "./styles";

namespace TextInput {
  export interface Props extends Omit<RNTextInputProps, "selectionColor" | "underlineColorAndroid"> {
    accessibilityLabel: string;
  }
}

export const TextInput = ({ inputMode = "text", ...props }: TextInput.Props) => {
  const { isFocused, ...focusRest } = useFocus();

  return (
    <RNTextInput
      style={[styles.textInput, isFocused && styles.focus]}
      placeholderTextColor={"#a1a1aa"}
      inputMode={inputMode}
      {...props}
      {...focusRest}
    />
  );
};
