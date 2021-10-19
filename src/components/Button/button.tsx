import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: 'lg' | 'sm';
  type?: 'primary' | 'default' | 'danger' | 'link';
  children?: React.ReactNode,
  href?: string
}
type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & { [P in keyof Pick<T, K>]: U };
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
type ButtonPropsOrigin = Partial<NativeButtonProps & AnchorButtonProps>
export type ButtonProps = OverrideProperty<ButtonPropsOrigin, 'type', 'primary' | 'default' | 'danger' | 'link'>
const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    disabled = false,
    size = 'lg',
    type = 'primary',
    children = null,
    // eslint-disable-next-line no-script-url
    href = "javaScript:;",
    ...restProps
  } = props
  const classes = `btn  ${className} btn-${type} btn-${size} ${disabled && "disabled"}`

  if (type === 'link') {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}
export default Button
