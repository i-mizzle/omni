import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

const ChartIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#4B5563' }) => {
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
                d="M16 16v-4m-4 4V8m-4 8v-2m-4.5-2c0-6.5 2-8.5 8.5-8.5s8.5 2 8.5 8.5-2 8.5-8.5 8.5-8.5-2-8.5-8.5"
            ></Path>
        </Svg>
    )
}

export default ChartIcon