import React from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps {
  className?: string;
  content: string;
  onClick: () => void;
}

export const Button = ({ className, content, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={twMerge(
      "px-5 py-3 w-full rounded-md font-semibold text-gray-12",
      className
    )}
  >
    {content}
  </button>
);
