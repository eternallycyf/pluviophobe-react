import { CSSProperties, FC, useContext } from "react";
import { MenuContext } from './menu'
export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties
}
const MenuItem: FC<MenuItemProps> = (props) => {
  const {
    index,
    disabled,
    className,
    style,
    children
  } = props
  const context = useContext(MenuContext)
  const classes = `menu-item ${className} ${disabled && 'is-disabled'} ${context.index === index && 'is-active'}`
  const handleClick = () => {
    context.onSelect && !disabled && typeof index === 'string' && context.onSelect(index)
  }
  return (
    <>
      <li className={classes} style={style} onClick={handleClick}>
        {children}
      </li>
    </>
  )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem
