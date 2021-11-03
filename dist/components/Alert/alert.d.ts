import { FC, ReactNode, ComponentProps } from "react";
interface BaseAlertProps {
    type?: 'success' | 'info' | 'error' | 'warning';
    className?: string;
    message?: ReactNode;
    description?: ReactNode;
    closable?: boolean;
    showIcon?: boolean;
}
export declare type OverrideProperty<T, K extends keyof T, U> = Omit<T, K> & {
    [P in keyof Pick<T, K>]: U;
};
declare type NativeButtonProps = BaseAlertProps & ComponentProps<'button'>;
declare type NativeDivProps = BaseAlertProps & ComponentProps<'div'>;
export declare type AlertProps = OverrideProperty<Partial<NativeButtonProps & NativeDivProps>, "type", 'success' | 'info' | 'error' | 'warning'>;
declare const Alert: FC<AlertProps>;
export default Alert;
