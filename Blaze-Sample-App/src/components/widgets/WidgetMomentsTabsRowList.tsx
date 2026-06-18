import React, { JSX } from 'react';
import { ViewStyle } from 'react-native';
// import { momentsTabsStyle } from '../../utils/blazePlayersTheme.utils'; // Uncomment to customize the tabs strip appearance.
import {
  BlazeMomentsRowView,
  BlazeMomentsWidgetTabsConfiguration,
  BlazeWidgetLabel,
  BlazeWidgetLayoutPreset,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate, momentsContainerTabsDelegate } from '../../utils';

export interface WidgetMomentsTabsRowListProps {
  style?: ViewStyle;
  overridePreset?: BlazeWidgetLayoutPreset;
}

// Demonstrates the Moments "widget to tabs" entry point: tapping any thumbnail opens the fullscreen
// tabs player. The widget thumbnails are driven by the FIRST tab's `dataSource`. The container-wide
// callbacks (tab selection, CTA, etc.) are delivered through the per-widget
// `momentsContainerTabsDelegate` prop, scoped to this widget instance.
const tabsConfiguration: BlazeMomentsWidgetTabsConfiguration = {
  containerSourceId: 'moments-tabs-demo',
  // tabsStyle: momentsTabsStyle, // Uncomment to customize the tabs strip; omitting it keeps the native default appearance.
  tabs: [
    {
      containerId: 'tab-for-you',
      title: 'For You',
      dataSource: { labels: BlazeWidgetLabel.singleLabel('moments') },
      // icon: { selectedImage: { imageName: 'like' }, unselectedImage: { imageName: 'exit' } }, // Uncomment if these drawables/assets exist.
    },
    {
      containerId: 'tab-trending',
      title: 'Trending',
      dataSource: { labels: BlazeWidgetLabel.singleLabel('moments') },
      shouldOrderMomentsByReadStatus: false,
    },
    {
      containerId: 'tab-latest',
      title: 'Latest',
      dataSource: { labels: BlazeWidgetLabel.singleLabel('moments') },
      cachePolicyLevel: 'DEFAULT',
    },
  ],
  // playerStyle: momentPlayerRowStyle, // Uncomment to customize the player launched from the tabs.
};

export function WidgetMomentsTabsRowList(
  props: WidgetMomentsTabsRowListProps,
): JSX.Element {
  const { style, overridePreset } = props;
  const presetRowLayout: BlazeWidgetLayoutPreset = 'MomentsWidget.Row.verticalRectangles';

  return (
    <BlazeMomentsRowView
      style={style}
      presetWidgetLayout={overridePreset ?? presetRowLayout}
      tabsConfiguration={tabsConfiguration}
      widgetDelegate={createWidgetDelegate('Moments Tabs Row')}
      momentsContainerTabsDelegate={momentsContainerTabsDelegate}
    />
  );
}
