import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { View } from "react-native";

import { Button } from ".";

const meta = {
  title: "Atoms/Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    ariaLabel: "Button",
  },
};
