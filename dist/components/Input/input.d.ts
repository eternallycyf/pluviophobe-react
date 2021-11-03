import { ReactElement, ChangeEvent, FC, ComponentProps } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
    size?: 'lg' | 'sm';
    icon?: IconProp;
    disabled?: boolean;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: FC<InputProps>;
export default Input;
