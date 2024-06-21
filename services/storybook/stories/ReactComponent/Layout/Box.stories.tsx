import "@rooney/react-components-layout/style.css";
import type { Meta, StoryObj } from "@storybook/react";
import { Box as _Box } from "@rooney/react-components-layout";

const meta: Meta<typeof _Box> = {
  title: "React Components/Layout/Box",
  component: _Box,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof _Box>;

export const FirstStory: Story = {
  args: {
    as: "div",
    padding: 5,
    background: "pink",
    borderRadius: "lg",
    boxShadow: "lg",
  },
};
