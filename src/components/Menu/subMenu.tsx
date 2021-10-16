import React, { useContext, useState, FC, Children, FunctionComponentElement, MouseEvent, cloneElement } from 'react'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}
const SubMenu: FC<SubMenuProps> = (props) => {
  const {
    index,
    title,
    children,
    className
  } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [menuOpen, setMenuOpen] = React.useState(isOpened)
  const classes = `menu-item submenu-item ${className} ${context.index === index && 'is-active'}  `
  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: MouseEvent) => { handleMouse(e, false) }
  } : {}
  const renderChildren = () => {
    const subMenuClasses = `pl-submenu ${menuOpen && 'menu-opened'}`
    const childComponent = Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      return childElement.type.displayName === 'MenuItem' ?
        cloneElement(childElement, { index: `${index}-${i}` }) :
        console.error('Warning: SubMenu has a child which is not a MenuItem Component');
    })
    return (
      <ul className={subMenuClasses} >
        {childComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className='submenu-title' {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu