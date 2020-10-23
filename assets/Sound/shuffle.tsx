import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ShuffleIcon(props: SvgProps) {
  return (
    <Svg width={35} height={36} viewBox="0 0 35 36" fill="none" {...props}>
      <Path
        d="M21.25 6.75h6.25m0 0V13m0-6.25L6.25 28m21.25-5v6.25m0 0h-6.25m6.25 0l-7.5-7.5M6.25 8l6.25 6.25"
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ShuffleIcon;
