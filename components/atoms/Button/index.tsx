import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

namespace Button {
  export interface Props {
    label: string;
    ariaLabel: string;
    onPress?: () => void;
  }
}

export const Button = ({ label, onPress }: Button.Props) => {
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress}>
      <View style={[styles.button, styles.primary]}>
        <Button.Label>{label}</Button.Label>
      </View>
    </TouchableOpacity>
  );
};

Button.Label = ({ children }: { children: string }) => <Text>{children}</Text>;
