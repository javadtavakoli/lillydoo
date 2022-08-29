import { ReactNode } from "react";

export interface ISelectorButtonProps {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}
