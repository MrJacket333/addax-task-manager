import { Icon, IconButtonComponent } from "./IconButton.styles";
import type { IconButtonProps } from "./IconButton.types";

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <IconButtonComponent onClick={onClick}>
      <Icon icon={icon} />
    </IconButtonComponent>
  )  
}