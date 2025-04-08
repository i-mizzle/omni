import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

const SunIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#4B5563' }) => {
  return (
    <Svg width={width} height={height}  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color} className="size-6">
        <Path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </Svg>

  )
}

export default SunIcon