// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../../Icon';
import { CarrierLogo } from '../../CarrierLogo';
import Text from '../../Text';
import StyleSheet from '../../PlatformStyleSheet';
import capitalize from '../../utils/capitalize';

type Props = {|
  +expanded: boolean,
  +carrier: {|
    +code: string,
    +name: string,
    +type?: 'airline' | 'bus' | 'train',
  |},
  +duration: string,
|};

export default function TimelineFlightDetail({
  expanded,
  carrier,
  duration,
}: Props) {
  const iconName = expanded ? 'show-less' : 'show-more';

  const modeOfTransport =
    expanded || carrier.type == null ? null : (
      <Text type="secondary" size="small">
        {capitalize(carrier.type)}
      </Text>
    );

  return (
    <View style={[styles.container, styles.row]}>
      <View style={[styles.section, styles.row]}>
        <View style={styles.carrierLogo}>
          <CarrierLogo size="small" carriers={[carrier]} />
        </View>
        <View>
          <Text type="primary">{carrier.name}</Text>
          {modeOfTransport}
        </View>
      </View>
      <View style={[styles.section, styles.row]}>
        <View style={styles.duration}>
          <Text type="primary" align="right" size="small">
            {duration}
          </Text>
        </View>
        <Icon name={iconName} color={defaultTokens.paletteInkNormal} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    minHeight: 44,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section: {
    alignItems: 'center',
  },
  carrierLogo: {
    padding: 8,
  },
  duration: {
    paddingEnd: 8,
  },
});
