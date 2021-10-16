import React, { FC, ReactNode, ComponentProps } from "react";

interface BaseAlertProps {
  type?: 'success' | 'info' | 'error' | 'warning' | any;
  className?: string;
  message?: ReactNode | string;
  description?: ReactNode | string;
  closable?: boolean;
}

type NativeButtonProps = BaseAlertProps & ComponentProps<'button'>;
type NativeDivProps = BaseAlertProps & ComponentProps<'div'>;
export type AlertProps = Partial<NativeButtonProps & NativeDivProps>

const Alert: FC<AlertProps> = (props) => {
  const {
    type = 'success',
    className = 'alert',
    message = null,
    closable = true,
    description = null,
    ...restProps
  } = props
  const classes = `alert  alert-content ${className} alert-${type}`
  let close = closable ? 'block' : 'none'

  let [divClose, setDivClose] = React.useState('block')
  return (
    <div style={{ display: `${divClose}` }}>
      <div className={classes} {...restProps} >
        <div style={{ fontWeight: 700 }}>{message}</div>
        <button onClick={() => setDivClose('none')} style={{ display: `${close}` }}
          className={'alert-icon alert-close-icon'}>×
        </button>
        <div className={'alert-description alert-with-description'}>{description}</div>
      </div>
    </div>
  )
}
export default Alert
