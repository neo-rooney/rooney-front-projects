import React from "react";
import "@rooney/react-components-layout/style.css";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex as _Flex } from "@rooney/react-components-layout";

const meta: Meta<typeof _Flex> = {
  title: "React Components/Layout/Flex",
  component: _Flex,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof _Flex>;

export const FirstStory: Story = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },
  render: (args) => (
    <_Flex {...args}>
      <div>Item1</div>
      <div>Item2</div>
    </_Flex>
  ),
};
