/* eslint-disable max-len */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CameraIcon = ({isFocused}: {isFocused: boolean}) => {
  return (
    <Svg width={26} height={32} viewBox="0 0 24 24" fill="none">
      <Path
        fill={isFocused ? 'blue' : 'grey'}
        d="M17,10.5V7c0,-0.55 -0.45,-1 -1,-1H4c-0.55,0 -1,0.45 -1,1v10c0,0.55 0.45,1 1,1h12c0.55,0 1,-0.45 1,-1v-3.5l4,4v-11l-4,4z"
      />
    </Svg>
  );
};

export default CameraIcon;
