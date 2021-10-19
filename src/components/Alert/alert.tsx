import React, { FC, ReactNode, ComponentProps } from "react";
interface BaseAlertProps {
  type?: 'success' | 'info' | 'error' | 'warning';
  className?: string;
  message?: ReactNode;
  description?: ReactNode | string;
  closable?: boolean;
}
export type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & { [P in keyof Pick<T, K>]: U };
type NativeButtonProps = BaseAlertProps & ComponentProps<'button'>;
type NativeDivProps = BaseAlertProps & ComponentProps<'div'>;
export type AlertProps =
  OverrideProperty<
    Partial<NativeButtonProps & NativeDivProps>,
    "type", 'success' | 'info' | 'error' | 'warning'>
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
