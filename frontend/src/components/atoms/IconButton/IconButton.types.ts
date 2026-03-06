import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type IconButtonProps = {
  icon: IconProp;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}