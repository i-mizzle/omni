import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

const HomeIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = '#4B5563' }) => {
  return (
    <Svg
        fill="none"
        viewBox="0 0 24 24"
        width={width} height={height}
    >
        <G id="style=stroke">
            <G id="home-line" fill={color} fillRule="evenodd" clipRule="evenodd" >
                <Path
                    id="vector (Stroke)"
                    d="M9.642 2.126a3.58 3.58 0 0 1 4.717 0l6.362 5.565a4.54 4.54 0 0 1 1.55 3.416v8.06a3.583 3.583 0 0 1-3.583 3.583H5.313a3.583 3.583 0 0 1-3.583-3.583v-8.06c0-1.31.565-2.554 1.55-3.416zm3.774 1.079a2.15 2.15 0 0 0-2.83 0L4.223 8.77a3.1 3.1 0 0 0-1.06 2.337v8.06a2.15 2.15 0 0 0 2.149 2.15h13.375a2.15 2.15 0 0 0 2.15-2.15v-8.06c0-.896-.387-1.748-1.06-2.337z"
                ></Path>
                <Path
                    id="vector (Stroke)_2"
                    d="M9.25 16.864a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
                    color={color}
                ></Path>
            </G>
        </G>
    </Svg>
  );
};

export default HomeIcon;
