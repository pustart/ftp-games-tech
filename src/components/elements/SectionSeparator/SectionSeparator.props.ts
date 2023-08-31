import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SectionSeparatorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
}
