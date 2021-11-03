import React, { FC } from 'react'
import { ThemeProps } from '../Icon/Icon'
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

const Progress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight = 15,
    showText = true,
    styles,
    theme = "primary",
  } = props
  return (
    <div className="pl-progress-bar" style={styles}>
      <div className="pl-progress-bar-outer" style={{ height: `${strokeHeight}px` }}>
        <div
          className={`pl-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

export default Progress;
