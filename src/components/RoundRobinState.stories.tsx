import { Meta, StoryObj } from "@storybook/react";
import { RoundRobinStage, RoundRobinStageProps } from "./RoundRobinStage";
import { Default as DefaultRoundRobin } from "./RoundRobinGroup.stories";

const meta = {
  title: "Components/Round Robin Stage",
  component: RoundRobinStage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RoundRobinStage>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultData: RoundRobinStageProps = {
  groups: [
    DefaultRoundRobin.args,
    DefaultRoundRobin.args,
    DefaultRoundRobin.args,
    DefaultRoundRobin.args,
  ],
};

export const Default: Story = {
  args: defaultData,
};
