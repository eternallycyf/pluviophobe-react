import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'error';
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps | string;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
