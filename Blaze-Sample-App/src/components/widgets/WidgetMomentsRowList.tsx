import React from 'react';
import { ViewStyle } from 'react-native';
import { momentPlayerRowTheme } from '../../utils/blazePlayersTheme.utils';
import { widgetLayoutMomentsRow } from '../../utils/widgetLayout.utils';
import {
  BlazeMomentsRowView,
  BlazeWidgetLabel,
  PresetThemeRowType,
} from '@wscsports/blaze-rtn-sdk';
import { createWidgetDelegate } from '../../utils';

export interface WidgetMomentsRowListProps {
  style?: ViewStyle;
}

export function WidgetMomentsRowList(
  props: WidgetMomentsRowListProps,
): JSX.Element {
  const {style} = props;
  const presetRowTheme: PresetThemeRowType = 'widgetCircle';

  return (
    <>
      <BlazeMomentsRowView
        style={style}
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('moments'),
        }}
        presetTheme={presetRowTheme}        
        // blazeWidgetLayout={widgetLayoutMomentsRow} // Uncomment this if you want to customize the widget's appearence.
        // blazePlayerMomentTheme={momentPlayerRowTheme} // Uncomment this if you want to customize the player's appearence.
        widgetDelegate={ createWidgetDelegate('Moments Row') }
      />
    </>
  );
}
