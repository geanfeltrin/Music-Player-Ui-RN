import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function RepeatIcon(props: SvgProps) {
  return (
    <Svg width={35} height={36} viewBox="0 0 35 36" fill="none" {...props}>
      <Path
        d="M23.75 4.25l5 5m0 0l-5 5m5-5h-17.5a5 5 0 00-5 5v2.5m5 15l-5-5m0 0l5-5m-5 5h17.5a5 5 0 005-5v-2.5"
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default RepeatIcon;
