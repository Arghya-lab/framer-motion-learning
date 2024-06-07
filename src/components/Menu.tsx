import { DOMAttributes } from "react";

interface MenuProps extends DOMAttributes<HTMLSpanElement> {
  iconSize?: number;
  iconColor?: string;
  iconStrokeWidth?: number;
  className?: string;
}

function Menu({
  iconSize = 24,
  iconColor = "currentColor",
  iconStrokeWidth = 2,
  className,
  ...restProps
}: MenuProps) {
  return (
    <span className={className} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize.toString()}
        height={iconSize.toString()}
        viewBox="0 0 24 24"
        fill="none"
        stroke={iconColor}
        stroke-width={iconStrokeWidth.toString()}
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-menu">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    </span>
  );
}

export default Menu;
