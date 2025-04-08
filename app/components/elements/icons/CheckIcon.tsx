import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const CheckIcon: React.FC<IconProps> = ({ width = 20, height = 20, color = '#FFF' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={3}>
      <Path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </Svg>
  );
};

export default CheckIcon;
