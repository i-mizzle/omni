import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconProps {
    width?: number;
    height?: number;
    color?: string;
}

const MoonIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#4B5563' }) => {
  return (
    <Svg fill="none" width={width} height={height} viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="size-6">
        <Path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </Svg>

  )
}

export default MoonIcon