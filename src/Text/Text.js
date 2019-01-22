// @flow

import * as React from 'react';
import { Text as RNText, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { createStylesGenerator } from '../utils';
import {
  align as alignTypes,
  fontSize,
  fontWeight as fontWeightTypes,
  textColor,
} from './styles';

import type { TextType } from './TextTypes';

const colorGen = createStylesGenerator('color', textColor);
const fontWeightGen = createStylesGenerator('fontWeight', fontWeightTypes);
const fontSizeGen = createStylesGenerator('fontSize', fontSize);
const alignGen = createStylesGenerator('textAlign', alignTypes);

const Text = ({
  align,
  children,
  dataTest,
  italic,
  numberOfLines,
  size,
  style,
  type,
  uppercase,
  weight,
}: TextType) => {
  const textStyle = [styles.text];
  italic && textStyle.push(styles.italic);
  uppercase && textStyle.push(styles.uppercase);
  weight && textStyle.push(styles[weight]);
  size && textStyle.push(styles[size]);
  type && textStyle.push(styles[type]);
  align && textStyle.push(styles[align]);
  style && textStyle.push(style);
  return (
    <RNText
      data-test={dataTest}
      style={textStyle}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};
const styles = StyleSheet.create({
  text: {
    margin: 0,
    fontFamily: Platform.OS === 'web' ? defaultTokens.fontFamily : 'Roboto',
  },
  italic: {
    fontStyle: 'italic',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  ...fontWeightGen(),
  ...alignGen(),
  ...colorGen(),
  ...fontSizeGen(),
});

export default Text;
