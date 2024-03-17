import { Meta, StoryObj } from "@storybook/react";
import { BracketUnit, BracketUnitProps } from "./BracketUnit";
import { Default as DefaultTicket } from "./Ticket.stories";

const meta = {
  title: "Components/Bracket Unit",
  component: BracketUnit,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BracketUnit>;

export default meta;
type Story = StoryObj<typeof meta>;

const topId = "PE-1";
const bottomId = "PE-2";

const defaultData: BracketUnitProps = {
  bottomSeed: { ...DefaultTicket.args, id: bottomId, title: "Bottom Seed" },
  topSeed: { ...DefaultTicket.args, id: topId, title: "Top Seed" },
};

export const BothSeedsNoWinner: Story = {
  args: { ...defaultData },
};

export const BothSeedsTopWinner: Story = {
  args: { ...defaultData, winner: "top" },
};

export const BothSeedsBottomWinner: Story = {
  args: { ...defaultData, winner: "bottom" },
};

export const TopByeNoWinner: Story = {
  args: { ...defaultData, bottomSeed: undefined },
};

export const TopByeWithWinner: Story = {
  args: {
    ...defaultData,
    bottomSeed: undefined,
    winner: "top",
  },
};

export const BottomByeNoWinner: Story = {
  args: { ...defaultData, topSeed: undefined },
};

export const BottomByeWithWinner: Story = {
  args: {
    ...defaultData,
    topSeed: undefined,
    winner: "bottom",
  },
};

export const RightToLeft: Story = {
  args: { ...defaultData, direction: "rtl", winner: "bottom" },
};
