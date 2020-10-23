import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SkipBackIcon(props: SvgProps) {
  return (
    <Svg width={51} height={50} viewBox="0 0 51 50" fill="none" {...props}>
      <Path
        d="M13 37.5v-25m25 26.786L20.143 25 38 10.714v28.572z"
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SkipBackIcon;
