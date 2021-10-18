import React, { Children, cloneElement, createContext, CSSProperties, FC, FunctionComponentElement, ReactNode } from 'react'
import { TabsItemProps } from './tabItem'
type onSelectCallBack = (index: string) => void
export interface TabsProps {
  defaultIndex?: string;
  mode?: 'default' | 'card';
  onSelect?: onSelectCallBack;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
export interface ITabsContext {
  index?: string;
  onSelect?: onSelectCallBack
}
export const TabsContext = createContext<ITabsContext>({ index: '0' })
const Tabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex = '0',
    onSelect,
    className = "",
    children,
    style = {},
    mode = 'default',
  } = props
  const classes = `pl-tabs-${mode === 'card' ? 'card' : 'default'} tabs-horizontal ${className} `
  const [currentActive, setCurrentActive] = React.useState(defaultIndex)
  const handleClick = (index: string) => {
    setCurrentActive(index)
    onSelect && onSelect(index)
  }
  const passedContext: ITabsContext = {
    index: currentActive || '0',
    onSelect: handleClick
  }
  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabsItemProps>
      const { displayName } = childElement.type
      return displayName === 'TabItem' ?
        cloneElement(childElement, { index: index.toString() }) :
        console.error('Warning: Menu has a child which is not a MenuItem Component');
    })
  }
  const renderChildrenContext = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabsItemProps>
      const { displayName } = childElement.type
      return displayName === 'TabItem' && currentActive === index.toString() && childElement.props.children
    })
  }
  return (
    <>
      <ul className={classes} style={style}>
        <TabsContext.Provider value={passedContext}>
          {renderChildren()}
        </TabsContext.Provider>
      </ul>
      <div>{renderChildrenContext()}</div>
    </>
  )
}
export default Tabs