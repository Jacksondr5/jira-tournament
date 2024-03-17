import { Meta, StoryObj } from "@storybook/react";
import { BracketConnection, BracketConnectionProps } from "./BracketConnection";

const meta = {
  title: "Components/Bracket Connection",
  component: BracketConnection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BracketConnection>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultData: BracketConnectionProps = {
  className: "h-80",
  winnerClassName: "fill-primary-8",
};

export const NoWinner: Story = {
  args: { ...defaultData },
};

export const TopWinner: Story = {
  args: { ...defaultData, winner: "top" },
};

export const BottomWinner: Story = {
  args: { ...defaultData, winner: "bottom" },
};

export const HideTop: Story = {
  args: { ...defaultData, hide: "top" },
};

export const HideBottom: Story = {
  args: { ...defaultData, hide: "bottom" },
};

export const RightToLeft: Story = {
  args: { ...defaultData, direction: "rtl" },
};
