import React, { forwardRef, JSX } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';

export interface ScreenContainerProps {
  children: JSX.Element | JSX.Element[];
  onLayout?: (e: LayoutChangeEvent) => void;
}

export const ScreenContainer = forwardRef<View, ScreenContainerProps>(
  (props, ref) => {
    const { children, onLayout } = props;

    function onLayoutChange(e: LayoutChangeEvent) {
      onLayout?.(e);
    }

    return (
      <View ref={ref} style={styles.view} onLayout={onLayoutChange}>
        {children}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
});
