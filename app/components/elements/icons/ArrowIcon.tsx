import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

const ArrowIcon: FC<IconProps> = ({width=24, height=24, color="#4B5563"}) => {
  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={color} className="size-6">
        <Path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </Svg>

  )
}

export default ArrowIcon