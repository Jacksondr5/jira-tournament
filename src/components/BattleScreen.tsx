import React from "react";
import { Ticket, TicketProps } from "./Ticket";
import { Button } from "./Button";
import { Divider } from "./Divider";

export interface BattleScreenProps {
  leftTicketProps: TicketProps;
  rightTicketProps: TicketProps;
  onWinnerSelected: (winner: TicketProps["id"]) => void;
}

export const BattleScreen = ({
  leftTicketProps,
  onWinnerSelected,
  rightTicketProps,
}: BattleScreenProps) => {
  return (
    <div className="grid grid-cols-[9fr_4px_9fr] grid-flow-row auto-rows-max gap-12 justify-center">
      <Ticket {...leftTicketProps} />
      <Divider className="row-span-2" />
      <Ticket {...rightTicketProps} />
      <Button
        className="bg-primary-9"
        content="Select Winner"
        onClick={() => onWinnerSelected(leftTicketProps.id)}
      />
      <Button
        className="col-start-3 bg-primary-9"
        content="Select Winner"
        onClick={() => onWinnerSelected(rightTicketProps.id)}
      />
    </div>
  );
};
