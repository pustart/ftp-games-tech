import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface GameCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  releaseDate?: string;
  publisher?: string;
  genre?: string;
  imgPath?: string;
  imgAlt?: string;
}
