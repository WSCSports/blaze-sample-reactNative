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
        // dataSource={{ // Uncomment this to demo a composite data source: two real sources merged & deduped into one feed.
        //   type: 'composite',
        //   dataSources: [
        //     { dataSource: { labels: BlazeWidgetLabel.singleLabel('moments') }, config: { isMandatory: true } }, // mandatory — a failure here fails the whole composite
        //     { dataSource: { recommendationsType: { type: 'ForYou', anyLabelFilter: ['<LABEL_ID>'] } } }, // non-mandatory (default) — a failure here is silently skipped
        //   ],
        // }}
        presetWidgetLayout={overridePreset ?? presetRowLayout}
        // blazeWidgetLayout={widgetLayoutMomentsRow} // Uncomment this if you want to customize the widget's appearence.
        // playerStyle={momentPlayerRowStyle} // Uncomment this if you want to customize the player's appearence.
        // widgetRemoteIdentifier="your-registered-remote-widget-id" // Uncomment with a real identifier registered in the CMS/Widget Builder to demo remote management — an unregistered value silently falls back to the local props above instead of erroring.
        // widgetId="my-moments-row-widget" // Uncomment to override the auto-generated widgetId sent to native; omitted, the wrapper's existing auto-generated identifier is used unchanged.
        widgetDelegate={createWidgetDelegate('Moments Row')}
      />
    </>
  );
}
