import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode,
  href?: string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: FC<ButtonProps> = (props: any): any => {
  const {
    className = '',
    disabled = false,
    size = 'lg',
    btnType = 'btn',
    children = null,
    // eslint-disable-next-line no-script-url
    href = "javaScript:;",
    ...restProps
  } = props
  const classes = `btn ${className} btn-${btnType} btn-${size} ${disabled ? "disabled" : ""}`

  if (btnType === 'link') {
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
