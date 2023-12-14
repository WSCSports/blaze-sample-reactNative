/* eslint-disable max-len */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = ({isFocused}: {isFocused: boolean}) => {
  return (
    <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
      <Path
        fill={isFocused ? 'blue' : 'grey'}
        d="M10,20v-6h4v6h5v-8h3L12,3 2,12h3v8z"
      />
    </Svg>
  );
};

export default HomeIcon;
