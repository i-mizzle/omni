import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Path } from 'react-native-svg'

const EllipsisIcon: FC<IconProps> = ({ width = 24, height=24, color = '#4B5563' }) => {
  return (
    <Svg  fill="none" width={width} height={height} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <Path strokeLinecap="round" stroke={color} strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </Svg>
  )
}

export default EllipsisIcon