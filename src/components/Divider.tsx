import { cl } from "@/cl";

export interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => (
  <div className={cl("flex justify-center w-full", className)}>
    <div className="h-full border-primary-6 border-2 w-0 rounded-md" />
  </div>
);
