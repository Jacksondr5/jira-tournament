import { cl } from "@/cl";
import { HorizontalDirection, TopOrBottom } from "@/types";

export interface BracketConnectionProps {
  className?: string;
  direction?: HorizontalDirection;
  hide?: TopOrBottom;
  winner?: TopOrBottom;
  winnerClassName?: string;
}

const HALF_WIDTH = 1;
const getRectanglePointsAroundLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string => {
  const topLeft = `${x1 - HALF_WIDTH},${y1 - HALF_WIDTH}`;
  const topRight = `${x2 + HALF_WIDTH},${y1 - HALF_WIDTH}`;
  const bottomRight = `${x2 + HALF_WIDTH},${y2 + HALF_WIDTH}`;
  const bottomLeft = `${x1 - HALF_WIDTH},${y2 + HALF_WIDTH}`;
  return `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
};

// const handleRtl = (direction: "ltr" | "rtl") => {

export const BracketConnection = ({
  className,
  direction,
  hide,
  winner,
  winnerClassName,
}: BracketConnectionProps) => {
  const loserClassName = "fill-gray-6";
  const topClassName = winner === "top" ? winnerClassName : loserClassName;
  const bottomClassName =
    winner === "bottom" ? winnerClassName : loserClassName;
  return (
    <svg
      viewBox="0 0 10 30"
      className={cl(direction === "rtl" && "rotate-180", className)}
    >
      {/* Top line */}
      {hide !== "top" && (
        <>
          <polygon
            className={topClassName}
            points={getRectanglePointsAroundLine(1, 5, 5, 5)}
          />
          <polygon
            points={getRectanglePointsAroundLine(5, 5, 5, 14)}
            className={topClassName}
          />
        </>
      )}
      {/* Bottom line */}
      {hide !== "bottom" && (
        <>
          <polygon
            points={getRectanglePointsAroundLine(1, 25, 5, 25)}
            className={bottomClassName}
            stroke="none"
          />
          {/* Need y1 to be 1 more than where the middle line is to keep a line from showing up when top is the winner.
          This is because the bottom line is painted on top of the top line. */}
          <polygon
            points={getRectanglePointsAroundLine(5, 16, 5, 25)}
            className={bottomClassName}
            stroke="none"
          />
        </>
      )}
      {/* Middle line */}
      <polygon
        points={getRectanglePointsAroundLine(5, 15, 10, 15)}
        className={winner ? winnerClassName : loserClassName}
        stroke="none"
      />
    </svg>
  );
};
