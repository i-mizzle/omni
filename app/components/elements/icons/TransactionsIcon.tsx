import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

const TransactionsIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#4B5563' }) => {
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
            d="M8 8h8m-8 4h8m-8 4h4m-8.5-4c0-6.5 2-8.5 8.5-8.5s8.5 2 8.5 8.5-2 8.5-8.5 8.5-8.5-2-8.5-8.5"
        ></Path>
    </Svg>

  )
}

export default TransactionsIcon