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
        dataSource={{
          labels: BlazeWidgetLabel.singleLabel('moments'),
        }}
        presetTheme={presetRowTheme}
        blazePlayerMomentTheme={momentPlayerRowTheme}
        blazeWidgetLayout={widgetLayoutMomentsRow}
        style={style}
        widgetDelegate={ createWidgetDelegate('Moments Row') }
      />
    </>
  );
}
