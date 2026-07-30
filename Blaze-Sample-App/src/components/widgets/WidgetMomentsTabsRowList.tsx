import React, { JSX, useRef } from 'react';
import { Button, ViewStyle } from 'react-native';
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
  shouldShowActionButtons?: boolean;
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
      // isVisible: false, // Uncomment together with the entry below to leave exactly one visible tab (tests the single-tab collapse / isTabTitleVisibleWhenSingleTab).
    },
    {
      containerId: 'tab-latest',
      title: 'Latest',
      dataSource: { labels: BlazeWidgetLabel.singleLabel('moments') },
      cachePolicyLevel: 'DEFAULT',
      // isVisible: false, // Uncomment together with the entry above to leave exactly one visible tab.
    },
  ],
  // playerStyle: momentPlayerRowStyle, // Uncomment to customize the player launched from the tabs.
};

export function WidgetMomentsTabsRowList(
  props: WidgetMomentsTabsRowListProps,
): JSX.Element {
  const { style, overridePreset, shouldShowActionButtons = false } = props;
  const presetRowLayout: BlazeWidgetLayoutPreset = 'MomentsWidget.Row.verticalRectangles';

  const momentsTabsRowRef = useRef<BlazeMomentsRowView | null>(null);

  const handleReloadAllTabs = () => {
    momentsTabsRowRef?.current?.reloadAllTabs();
  };

  const handleReloadNonActiveTabs = () => {
    momentsTabsRowRef?.current?.reloadNonActiveTabs();
  };

  const handleReloadTab = () => {
    momentsTabsRowRef?.current?.reloadTab(0);
  };

  const handleReloadTabByContainerId = () => {
    momentsTabsRowRef?.current?.reloadTabByContainerId('tab-trending');
  };

  return (
    <>
      {shouldShowActionButtons && (
        <>
          <Button title="Reload All Tabs" onPress={handleReloadAllTabs} />
          <Button title="Reload Non-Active Tabs" onPress={handleReloadNonActiveTabs} />
          <Button title="Reload Tab 0" onPress={handleReloadTab} />
          <Button title="Reload By Container Id" onPress={handleReloadTabByContainerId} />
        </>
      )}
      <BlazeMomentsRowView
        style={style}
        ref={momentsTabsRowRef}
        presetWidgetLayout={overridePreset ?? presetRowLayout}
        tabsConfiguration={tabsConfiguration}
        widgetDelegate={createWidgetDelegate('Moments Tabs Row')}
        momentsContainerTabsDelegate={momentsContainerTabsDelegate}
      />
    </>
  );
}
