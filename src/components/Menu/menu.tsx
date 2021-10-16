import { CSSProperties, FC, createContext, useState, Children, FunctionComponentElement, cloneElement } from 'react'
import { MenuItemProps } from './menuItem'

type SelectCallback = (selectedIndex: string) => void;
type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[]
}
interface IMenuContext {
  index?: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[]
}
export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: FC<MenuProps> = (props) => {
  const {
    className,
    mode = 'horizontal',
    style,
    children,
    defaultIndex = '0',
    onSelect,
    defaultOpenSubMenus = []
  } = props
  const [currentActive, setCurrentActive] = useState(defaultIndex)
  const handleClick = (index: string) => {
    setCurrentActive(index)
    onSelect && onSelect(index)
  }
  const passedContext: IMenuContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      return displayName === 'MenuItem' || displayName === 'SubMenu' ?
        cloneElement(childElement, { index: index.toString() }) :
        console.error('Warning: Menu has a child which is not a MenuItem Component');
    })
  }

  let classes = `pl-menu ${className} ${mode === 'vertical' ? 'menu-vertical' : 'menu-horizontal'}`


  return (
    <>
      <ul className={classes} style={style}>
        <MenuContext.Provider value={passedContext}>
          {renderChildren()}
        </MenuContext.Provider>
      </ul>
    </>
  )
}

export default Menu
