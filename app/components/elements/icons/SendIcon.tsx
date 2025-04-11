import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

const SendIcon: FC<IconProps> = ({width=24, height=24, color='#4B5563'}) => {
  return (
    <Svg
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 24 24"
    >
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 15.747V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.253M12.202 5.917v8.5M15.546 8.267 12.202 5 8.858 8.267"
        ></Path>
    </Svg>
    )
}

export default SendIcon