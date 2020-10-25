import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function PlayIcon(props: SvgProps) {
  return (
    <Svg width={51} height={51} viewBox="0 0 51 51" fill="none" {...props}>
      <Path
        d="M13.099 9.536l25 16.072-25 16.071V9.536z"
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default PlayIcon;
