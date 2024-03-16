import { Meta, StoryObj } from "@storybook/react";
import { BattleScreen, BattleScreenProps } from "./BattleScreen";
import { Default as DefaultTicket } from "./Ticket.stories";

const meta = {
  title: "Components/Battle Screen",
  component: BattleScreen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BattleScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultData: BattleScreenProps = {
  leftTicketProps: DefaultTicket.args,
  onWinnerSelected: () => {},
  rightTicketProps: DefaultTicket.args,
};

export const Default: Story = {
  args: defaultData,
};
