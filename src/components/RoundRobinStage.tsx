import clsx from "clsx";
import { RoundRobinGroup, RoundRobinGroupProps } from "./RoundRobinGroup";
import { Divider } from "./Divider";

export interface RoundRobinStageProps {
  groups: RoundRobinGroupProps[];
}

export const RoundRobinStage = ({ groups }: RoundRobinStageProps) => (
  <div className="grid grid-cols-[9fr_4px_9fr] grid-flow-row auto-rows-max gap-12 justify-center">
    {groups.map((x, index) => (
      <RoundRobinGroup
        key={x.groupNumber}
        {...x}
        className={clsx(index % 2 === 0 ? "col-start-1" : "col-start-3")}
      />
    ))}
    <Divider className="row-span-2 col-start-2 row-start-1" />
  </div>
);
