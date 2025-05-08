import React, { JSX } from 'react';
import { ViewStyle } from 'react-native';
import { momentPlayerRowStyle } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutMomentsRow } from '../../utils/widgetLayout.utils';
import {
  BlazeMomentsRowView,
  BlazeWidgetLabel,
  PresetRowWidgetLayout,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate } from '../../utils';

export interface WidgetMomentsRowListProps {
  style?: ViewStyle;
}

export function WidgetMomentsRowList(
  props: WidgetMomentsRowListProps,
): JSX.Element {
  const { style } = props;
  const presetRowLayout: PresetRowWidgetLayout = 'widgetCircle';

  return (
    <>
      <BlazeMomentsRowView
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('moments'),
        }}
        presetWidgetLayout={presetRowLayout}
        // blazeWidgetLayout={widgetLayoutMomentsRow} // Uncomment this if you want to customize the widget's appearence.
        // blazeMomentsPlayerStyle={momentPlayerRowStyle} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={createWidgetDelegate('Moments Row')}
      />
    </>
  );
}
