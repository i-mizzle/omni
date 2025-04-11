import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

const ExchangeIcon: FC<IconProps> = ({height=24, width=24, color='#4B5563'}) => {
  return (
        <Svg
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 24 24"
        >
            <Path
                stroke={color}
                strokeMiterlimit="10"
                strokeWidth={1.5}
                d="M12 23.25c6.213 0 11.25-5.037 11.25-11.25S18.213.75 12 .75.75 5.787.75 12 5.787 23.25 12 23.25Z"
            ></Path>
            <Path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 8.5h8M16 15.5H8M15 6l2 2.5-2 2.5M10 18l-2-2.5 2-2.5"
            ></Path>
        </Svg>
    )
}

export default ExchangeIcon