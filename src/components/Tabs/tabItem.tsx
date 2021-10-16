import { CSSProperties, FC, useContext } from 'react'
import { TabsContext } from './tabs'

export interface TabsItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties
}

const Tabs: FC<TabsItemProps> = (props) => {
  const {
    index = 0,
    disabled = false,
    className = '',
    style = {},
    children
  } = props
  const context = useContext(TabsContext)
  const classes = `tabs-item ${className} ${disabled && 'is-disabled'} ${context.index === index && 'is-active'}`
  const handleClick = () => {
    context.onSelect && !disabled && context.onSelect(index)
  }
  return (
    <>
      <li className={classes} style={style} onClick={handleClick}>
        {children}
      </li>
    </>
  )
}
export default Tabs