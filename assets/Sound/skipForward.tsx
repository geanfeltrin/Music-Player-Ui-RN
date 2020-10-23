import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SkipForwardIcon(props: SvgProps) {
  return (
    <Svg width={51} height={50} viewBox="0 0 51 50" fill="none" {...props}>
      <Path
        d="M38 12.5v25M13 10.714L30.857 25 13 39.286V10.714z"
        stroke="#999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SkipForwardIcon;
