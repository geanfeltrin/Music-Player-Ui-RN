import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const PauseIcon: React.FC<SvgProps> = props => {
  return (
    <Svg width={51} height={50} viewBox="0 0 51 50" fill="none" {...props}>
      <Path
        d="M21.929 10.714h-7.143v28.572h7.143V10.714zM36.214 10.714h-7.142v28.572h7.142V10.714z"
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PauseIcon;
