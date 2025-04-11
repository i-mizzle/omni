import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

const ReceiveIcon: FC<IconProps> = ({width=24, height=24, color='#4B5563'}) => {
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
        d="M5 15.747V18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.253M12.202 13.5V5M15.546 11.15l-3.344 3.266-3.344-3.266"
        ></Path>
    </Svg>
  )
}

export default ReceiveIcon