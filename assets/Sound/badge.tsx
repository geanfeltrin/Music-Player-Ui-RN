import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BadgeIcon(props: SvgProps) {
  return (
    <Svg width={29} height={29} viewBox="0 0 29 29" fill="none" {...props}>
      <G>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 22.114c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10z"
          fill="#fff"
        />
      </G>
      <Path
        d="M14.5 19.892a7.778 7.778 0 100-15.555 7.778 7.778 0 000 15.555z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={14.246}
          y1={-2.679}
          x2={-0.802}
          y2={12.368}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#CDD2FD" />
          <Stop offset={1} stopColor="#6979F8" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default BadgeIcon;
