import "@rooney/react-components-layout/style.css";
import type { Meta, StoryObj } from "@storybook/react";
import { Text as _Text } from "@rooney/react-components-layout";
import { classes, vars } from "@rooney/themes";

const meta: Meta<typeof _Text> = {
  title: "React Components/Layout/Typography/Text",
  component: _Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export default meta;
type Story = StoryObj<typeof _Text>;

export const FirstStory: Story = {
  args: {
    as: "p",
    fontSize: "sm",
    children: "Hello world",
    color: "gray",
  },
};
