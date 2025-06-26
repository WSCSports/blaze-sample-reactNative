import React, { JSX, useRef } from 'react';
import { ViewStyle } from 'react-native';
import { initialWidgetStyleOverrides, updateWidgetStyleOverrides } from '../../utils/widgetItemStyleOverrides.utils';
import { createWidgetDelegate, updateDataSourceHandler } from '../../utils/sdk.utils';
import {
    BlazeVideosGridView,
    BlazeWidgetLabel,
    BlazeWidgetLayoutPreset,
} from '@wscsports/blaze-rtn-sdk';

export interface WidgetVideosGridListProps {
    style?: ViewStyle;
    isEmbeddedInScrollView?: boolean;
    shouldLimitItemCount?: boolean;
}

export function WidgetVideosGridList(
    props: WidgetVideosGridListProps,
): JSX.Element {
    const { style, isEmbeddedInScrollView, shouldLimitItemCount = false } = props;
    const presetGridLayout: BlazeWidgetLayoutPreset = 'VideosWidget.Grid.twoColumnsVerticalRectangles';

    const videosGridRef = useRef<BlazeVideosGridView | null>(null);

    return (
        <>
            <BlazeVideosGridView
                style={style}
                ref={videosGridRef}
                isEmbeddedInScrollView={isEmbeddedInScrollView}
                dataSource={{
                    labels: BlazeWidgetLabel.singleLabel('videos'),
                    maxItems: shouldLimitItemCount == true ? 4 : undefined
                }}
                presetWidgetLayout={presetGridLayout}
                widgetDelegate={createWidgetDelegate('Videos Grid')}
            />
        </>
    );
} 