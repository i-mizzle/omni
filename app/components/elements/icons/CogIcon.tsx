import { IconProps } from '@/static/interfaces/icon.interface'
import React, { FC } from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

const CogIcon: FC<IconProps> = ({ width = 24, height = 24, color = '#4B5563' }) => {
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 32 32"
        >
            <Path
                stroke={color}
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.19 3.757A1 1 0 0 0 18.22 3h-4.44a1 1 0 0 0-.97.757l-.66 2.644a1 1 0 0 1-.47.623l-1.291.747a1 1 0 0 1-.776.095l-2.62-.75a1 1 0 0 0-1.142.462l-2.219 3.844a1 1 0 0 0 .171 1.219l1.96 1.895a1 1 0 0 1 .305.719v1.49a1 1 0 0 1-.305.72l-1.96 1.894a1 1 0 0 0-.17 1.22l2.218 3.843a1 1 0 0 0 1.141.461l2.61-.746a1 1 0 0 1 .793.106l.963.584a1 1 0 0 1 .43.54l.984 2.95a1 1 0 0 0 .949.683h4.558a1 1 0 0 0 .949-.684l.982-2.947a1 1 0 0 1 .435-.542l.982-.587a1 1 0 0 1 .79-.103l2.59.745a1 1 0 0 0 1.142-.461l2.222-3.848a1 1 0 0 0-.166-1.214l-1.933-1.896a1 1 0 0 1-.3-.713v-1.5a1 1 0 0 1 .3-.713l1.933-1.896a1 1 0 0 0 .166-1.214l-2.222-3.848a1 1 0 0 0-1.142-.46l-2.6.747a1 1 0 0 1-.774-.093l-1.31-.75a1 1 0 0 1-.474-.625l-.66-2.64z"
            ></Path>
            <Circle
                cx="16"
                cy="16"
                r="5"
                stroke={color}
                strokeLinejoin="round"
                strokeWidth={2}
            ></Circle>
        </Svg>
    )
}

export default CogIcon