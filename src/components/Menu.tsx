import { DOMAttributes } from "react";

interface MenuProps extends DOMAttributes<HTMLSpanElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

function Menu({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...restProps
}: MenuProps) {
  return (
    <span className={className} {...restProps}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size.toString()}
        height={size.toString()}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        stroke-width={strokeWidth.toString()}
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
