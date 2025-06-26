import React, { JSX } from 'react';
import { ViewStyle } from 'react-native';
import { momentPlayerRowStyle } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutMomentsRow } from '../../utils/widgetLayout.utils';
import {
  BlazeMomentsRowView,
  BlazeWidgetLabel,
  BlazeWidgetLayoutPreset,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate } from '../../utils';

export interface WidgetMomentsRowListProps {
  style?: ViewStyle;
  overridePreset?: BlazeWidgetLayoutPreset
}

export function WidgetMomentsRowList(
  props: WidgetMomentsRowListProps,
): JSX.Element {
  const { style, overridePreset } = props;
  const presetRowLayout: BlazeWidgetLayoutPreset = 'MomentsWidget.Row.verticalRectangles';

  return (
    <>
      <BlazeMomentsRowView
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('moments'),
        }}
        presetWidgetLayout={overridePreset ?? presetRowLayout}
        // blazeWidgetLayout={widgetLayoutMomentsRow} // Uncomment this if you want to customize the widget's appearence.
        // playerStyle={momentPlayerRowStyle} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={createWidgetDelegate('Moments Row')}
      />
    </>
  );
}
