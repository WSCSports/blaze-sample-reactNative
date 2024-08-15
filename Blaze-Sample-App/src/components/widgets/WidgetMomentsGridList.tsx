import React, { useRef } from 'react';
import { Button, ViewStyle } from 'react-native';
import { momentPlayerGridStyle } from '../../utils/blazePlayersTheme.utils';
import { initialWidgetStyleOverrides, updateWidgetStyleOverrides, widgetItemStyleOverrides } from '../../utils/widgetItemStyleOverrides.utils';
import { createWidgetDelegate, updateDataSourceHandler } from '../../utils/sdk.utils';
import {
  BlazeMomentsGridView,
  BlazeWidgetLabel,
  PresetGridWidgetLayout,
} from '@wscsports/blaze-rtn-sdk';
import { widgetLayoutMomentsGrid } from '../../utils/widgetLayout.utils';

export interface WidgetMomentsGridListProps {
  style?: ViewStyle;
  adjustSizeAutomatically?: boolean;
}

export function WidgetMomentsGridList(
  props: WidgetMomentsGridListProps,
): JSX.Element {
  const { style, adjustSizeAutomatically } = props;
  const presetGridLayout: PresetGridWidgetLayout = 'twoColumnsTheme';
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
    updateDataSourceHandler(momentsGridRef, newDataSource, false);
  };

  const handleUpdateStyleOverrides = () => {
    if (momentsGridRef?.current) {
      const updateOverrideStyles = updateWidgetStyleOverrides()
      momentsGridRef?.current.updateOverrideStyles(updateOverrideStyles, false);
    }
  };

  const handleUpdateWidgetsUi = () => {
    if (momentsGridRef?.current) {
      momentsGridRef?.current.updateWidgetsUi();
    }
  };

  return (
    <>
      <Button title="Reload Data" onPress={handleReloadData} />
      <Button title="Update Data Source" onPress={handleUpdateDataSource} />
      <Button title="Update Style Overrides" onPress={handleUpdateStyleOverrides} />
      <Button title="Update Widget Ui" onPress={handleUpdateWidgetsUi} />
      <BlazeMomentsGridView
        style={style}
        ref={momentsGridRef}
        adjustSizeAutomatically={adjustSizeAutomatically}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('moments'),
        }}
        presetWidgetLayout={presetGridLayout}        
        // blazeWidgetLayout={widgetLayoutMomentsGrid} // Uncomment this if you want to customize the widget's appearence.
        // blazeMomentsPlayerStyle={momentPlayerGridStyle} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={ createWidgetDelegate('Moments Grid') }
        perItemStyleOverrides={initialWidgetStyleOverrides()}
      />
    </>
  );
}

