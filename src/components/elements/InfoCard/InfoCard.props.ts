import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InfoCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  text: string;
  bg: "solid" | "transparent";
  border: boolean;
  icon?: JSX.Element,
}
