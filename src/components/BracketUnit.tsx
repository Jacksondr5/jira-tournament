import { HorizontalDirection, TopOrBottom } from "@/types";
import { BracketConnection } from "./BracketConnection";
import { Ticket, TicketProps } from "./Ticket";
import { cl } from "@/cl";

export interface BracketUnitProps {
  bottomSeed?: TicketProps;
  direction?: HorizontalDirection;
  topSeed?: TicketProps;
  winner?: TopOrBottom;
}

const BracketTicket = (props: TicketProps) => (
  <Ticket {...props} isCollapsed inlineTitle />
);

export const BracketUnit = ({
  bottomSeed,
  direction,
  topSeed,
  winner,
}: BracketUnitProps) => {
  const winningTicket =
    winner === "top" ? topSeed : winner === "bottom" ? bottomSeed : undefined;
  return (
    <div className="grid grid-cols-[3fr_1fr_3fr] grid-rows-3">
      {topSeed && (
        <BracketTicket
          {...topSeed}
          className={cl(direction === "rtl" && "col-start-3")}
        />
      )}
      <BracketConnection
        className="col-start-2 row-start-1 row-end-4 h-full"
        direction={direction}
        hide={!topSeed ? "top" : !bottomSeed ? "bottom" : undefined}
        winner={winner}
        winnerClassName="fill-primary-6"
      />
      {bottomSeed && (
        <BracketTicket
          {...bottomSeed}
          className={cl("row-start-3", direction === "rtl" && "col-start-3")}
        />
      )}
      {winningTicket && (
        <>
          <BracketTicket
            {...winningTicket}
            className={cl(
              "row-start-2",
              direction === "rtl" ? "col-start-1" : "col-start-3"
            )}
          />
        </>
      )}
    </div>
  );
};
