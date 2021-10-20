import { ReactElement, ChangeEvent, FC, ComponentProps } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon'

export interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
  size?: 'lg' | 'sm';
  icon?: IconProp;
  disabled?: boolean;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    className,
    ...restProps
  } = props

  const classes = `
     pl-input-wrapper 
     ${className}
     ${disabled && 'is-disabled'} 
     ${(prepend || append) && 'input-group'} 
     input-size-${size}
     ${!!append && 'input-group-append'}
     ${!!prepend && 'input-group-prepend'}
  `
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }
  return (
    <>
      <div className={classes} style={style}>
        {prepend && <div className="pl-input-group-prepend">{prepend}</div>}
        {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
        <input
          className="pl-input-inner"
          disabled={disabled}
          {...restProps}
        />
        {append && <div className="pl-input-group-append">{append}</div>}
      </div>
    </>
  )
}
export default Input