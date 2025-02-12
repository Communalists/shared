import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { View } from "react-native";

import { TextInput } from ".";

const meta = {
  title: "Atoms/TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  args: { onPress: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "hello@communalists.com",
    accessibilityLabel: "E-mail"
  },
};
