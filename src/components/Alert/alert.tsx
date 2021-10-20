import React, { FC, ReactNode, ComponentProps } from "react";
import Icon from '../Icon'
interface BaseAlertProps {
  type?: 'success' | 'info' | 'error' | 'warning';
  className?: string;
  message?: ReactNode;
  description?: ReactNode;
  closable?: boolean;
  showIcon?: boolean;
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
    showIcon = true,
    ...restProps
  } = props
  const classes = `alert  alert-content ${className} alert-${type}`
  let close = closable ? 'block' : 'none'
  let [divClose, setDivClose] = React.useState('block')
  return (
    <div style={{ display: `${divClose}` }}>
      <div className={classes} {...restProps} >
        <div style={{ minHeight: '50px', lineHeight: "50px", display: "flex", justifyContent: "center" }}>
          {showIcon &&
            <div style={{ display: "inline-block", padding: "4px" }}>
              <Icon
                className={'far'}
                theme={`${type}`}
                size='2x'
                icon={type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'exclamation-circle'}
              />
            </div>
          }
          <span style={{ fontWeight: 700 }}>{message}</span>
        </div>
        <button onClick={() => setDivClose('none')} style={{ display: `${close}` }}
          className={'alert-icon alert-close-icon'}>
          <Icon theme={`${type}`} icon='times' />
        </button>
        <div className={'alert-description alert-with-description'}>{description}</div>
      </div>
    </div>
  )
}
export default Alert
