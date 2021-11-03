import React, { CSSProperties, FC, ReactNode, useContext } from 'react'
import { TabsContext } from './tabs'
export interface TabsItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  label?: ReactNode;
  children?: ReactNode;
}
const TabItem: FC<TabsItemProps> = (props) => {
  const {
    index = '0',
    disabled = false,
    className = '',
    style = {},
    // children,
    label = "",
  } = props
  const context = useContext(TabsContext)
  const classes = `tabs-item ${className} ${disabled && 'is-disabled'} ${context.index === index && 'is-active'}`
  const handleClick = () => {
    context.onSelect && !disabled && context.onSelect(index)
  }
  return (
    <>
      <li className={classes} style={style} onClick={handleClick}>
        {label}
      </li>
    </>
  )
}
TabItem.displayName = 'TabItem'
export default TabItem
