/* eslint-disable max-len */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ActionIcon = ({isFocused}: {isFocused: boolean}) => {
  return (
    <Svg width={24} height={32} viewBox="0 0 90 90" fill="none">
      <Path
        fill={isFocused ? 'blue' : 'grey'}
        d="M45 0C20.147 0 0 20.147 0 45c0 24.853 20.147 45 45 45s45-20.147 45-45C90 20.147 69.853 0 45 0zM62.251 46.633L37.789 60.756c-1.258 0.726-2.829-0.181-2.829-1.633V30.877c0-1.452 1.572-2.36 2.829-1.634l24.461 14.123C63.508 44.092 63.508 45.907 62.251 46.633z"
      />
    </Svg>
  );
};

export default ActionIcon;
