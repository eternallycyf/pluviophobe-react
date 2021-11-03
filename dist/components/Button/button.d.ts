import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: 'lg' | 'sm';
    type?: 'primary' | 'default' | 'danger' | 'link';
    children?: React.ReactNode;
    href?: string;
}
declare type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & {
    [P in keyof Pick<T, K>]: U;
};
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
declare type ButtonPropsOrigin = Partial<NativeButtonProps & AnchorButtonProps>;
export declare type ButtonProps = OverrideProperty<ButtonPropsOrigin, 'type', 'primary' | 'default' | 'danger' | 'link'>;
declare const Button: FC<ButtonProps>;
export default Button;
