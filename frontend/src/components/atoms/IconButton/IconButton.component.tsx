import { Icon, IconButtonComponent } from "./IconButton.styles";
import type { IconButtonProps } from "./IconButton.types";

export const IconButton = ({ icon, onClick, $width, $height, $noBorder }: IconButtonProps) => {
  return (
    <IconButtonComponent onClick={onClick} $width={$width} $height={$height} $noBorder={$noBorder}>
      <Icon icon={icon} />
    </IconButtonComponent>
  )  
}