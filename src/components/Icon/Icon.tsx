import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'error'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps | string;
}

const Icon: React.FC<IconProps> = (props) => {
  // icon-primary
  const {
    className,
    theme,
    ...restProps
  } = props
  const classes = ` ${className} icon-${theme}`
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}
export default Icon
