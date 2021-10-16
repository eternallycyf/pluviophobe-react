import React, { createContext, CSSProperties, FC, ReactNode } from 'react'

type onSelectCallBack = (index: number) => void
export interface TabsProps {
  defaultIndex?: number;
  mode?: 'default' | 'card';
  onSelect?: onSelectCallBack;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
export interface ITabsContext {
  index?: number;
  onSelect?: onSelectCallBack
}
export const TabsContext = createContext<ITabsContext>({ index: 0 })


const Tabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex = 0,
    onSelect,
    className = "",
    children,
    style = {},
    mode = 'default'
  } = props
  const classes = `pl-tabs-${mode === 'card' ? 'card' : 'default'} tabs-horizontal ${className} `
  const [currentActive, setCurrentActive] = React.useState(defaultIndex)
  const handleClick = (index: number) => {
    setCurrentActive(index)
    onSelect && onSelect(index)
  }
  const passedContext: ITabsContext = {
    index: currentActive || 0,
    onSelect: handleClick
  }

  return (
    <>
      <ul className={classes} style={style}>
        <TabsContext.Provider value={passedContext}>
          {children}
        </TabsContext.Provider>
      </ul>
    </>
  )
}
export default Tabs