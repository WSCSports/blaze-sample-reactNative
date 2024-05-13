import React, { useRef } from 'react';
import { Button, ViewStyle } from 'react-native';
import { momentPlayerGridTheme } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutMomentsGrid } from '../../utils/widgetLayout.utils';
import { createWidgetDelegate, updateDataSourceHandler } from '../../utils/sdk.utils';
import {
  BlazeMomentsGridView,
  BlazeWidgetLabel,
  PresetThemeGridType,
} from '@wscsports/blaze-rtn-sdk';

export interface WidgetMomentsGridListProps {
  style?: ViewStyle;
  adjustSizeAutomatically?: boolean;
}

export function WidgetMomentsGridList(
  props: WidgetMomentsGridListProps,
): JSX.Element {
  const { style, adjustSizeAutomatically } = props;
  const presetGridTheme: PresetThemeGridType = 'twoColumnsTheme';
  const momentsGridRef = useRef<BlazeMomentsGridView | null>(null);

  const handleReloadData = () => {
    if (momentsGridRef?.current) {
      momentsGridRef?.current.reloadData();
    }
  };

  const handleUpdateDataSource = () => {
    const newDataSource = {
      /* Your updated data source */
      labels: BlazeWidgetLabel.atLeastOneOf('messi', 'ronaldo'),
    };
    updateDataSourceHandler(momentsGridRef, newDataSource);
  };

  return (
    <>
      <Button title="Reload Data" onPress={handleReloadData} />
      <Button title="Update Data Source" onPress={handleUpdateDataSource} />
      <BlazeMomentsGridView
        style={style}
        ref={momentsGridRef}
        adjustSizeAutomatically={adjustSizeAutomatically}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('moments'),
        }}
        presetTheme={presetGridTheme}        
        // blazeWidgetLayout={widgetLayoutMomentsGrid} // Uncomment this if you want to customize the widget's appearence.
        // blazePlayerMomentTheme={momentPlayerGridTheme} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={ createWidgetDelegate('Moments Grid') }
      />
    </>
  );
}
