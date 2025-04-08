import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

const BellIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#4B5563' }) => {
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
                strokeWidth={2}
                d="M9 21h6m3-12.4c0-1.485-.632-2.91-1.757-3.96S13.592 3 12 3c-1.591 0-3.117.59-4.242 1.64S6 7.115 6 8.6c0 2.686-.676 4.584-1.472 5.887-.772 1.262-1.157 1.893-1.143 2.057.016.184.053.248.201.358.133.098.762.098 2.02.098h12.788c1.259 0 1.888 0 2.02-.098.149-.11.185-.174.201-.358.015-.164-.37-.795-1.142-2.057C18.677 13.184 18 11.287 18 8.6"
            ></Path>
        </Svg>
    )
}

export default BellIcon

