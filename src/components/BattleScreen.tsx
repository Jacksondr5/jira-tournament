import React from "react";
import { Ticket, TicketProps } from "./Ticket";
import { Button } from "./Button";

export interface BattleScreenProps {
  leftTicketProps: TicketProps;
  rightTicketProps: TicketProps;
  onWinnerSelected: (winner: TicketProps["ticketKey"]) => void;
}

export const BattleScreen = ({
  leftTicketProps,
  onWinnerSelected,
  rightTicketProps,
}: BattleScreenProps) => {
  return (
    <div className="grid grid-cols-[9fr_4px_9fr] grid-flow-row auto-rows-max gap-12 justify-center">
      <Ticket {...leftTicketProps} />
      <div className="flex justify-center w-full row-span-2">
        <div className="h-full border-primary-6 border-2 w-0 rounded-md" />
      </div>
      <Ticket {...rightTicketProps} />
      <Button
        className="bg-primary-9"
        content="Select Winner"
        onClick={() => onWinnerSelected(leftTicketProps.ticketKey)}
      />
      <Button
        className="col-start-3 bg-primary-9"
        content="Select Winner"
        onClick={() => onWinnerSelected(rightTicketProps.ticketKey)}
      />
    </div>
  );
};
