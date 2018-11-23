// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import TextInput from './index';
import Icon from '../Icon';
import ServiceLogo from '../ServiceLogo/component';

import iconsMap from '../Icon/icons.json';

storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const size = select('Size', ['small', 'normal'], 'normal');
    const label = text('Label', 'Label');
    const inlineLabel = boolean('Inline label', false);
    const value = text('Value', '');
    const placeholder = text('Placeholder', 'Placeholder');
    const disabled = boolean('Disabled', false);
    const required = boolean('Required', false);
    const type = select(
      'Type',
      ['text', 'password', 'email', 'number'],
      'text'
    );
    const serviceLogoName = select(
      'Suffix service logo',
      [
        'AirHelp',
        'Amex',
        'AxaAssistance',
        'DinersClub',
        'JCB',
        'Maestro',
        'MasterCard',
        'MIR',
        'NewYorkTimes',
        'NortonSecured',
        'TravelPulse',
        'Visa',
        'VisaHQ',
        'Zooz',
      ],
      'Visa'
    );
    const iconName = select(
      'Prefix icon name',
      Object.keys(iconsMap),
      'search'
    );
    const error = text('Error', '');
    const help = text('Help', '');

    return (
      <TextInput
        size={size}
        label={label}
        inlineLabel={inlineLabel}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        type={type}
        suffix={<ServiceLogo name={serviceLogoName} />}
        prefix={<Icon name={iconName} />}
        onChangeText={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        error={error}
        help={help}
      />
    );
  })
  .add('Default input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      onChangeText={action('change')}
    />
  ))
  .add('Disabled input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      disabled
      onChangeText={action('change')}
    />
  ))
  .add('Small input', () => (
    <TextInput
      size="small"
      label="Label"
      placeholder="Type something"
      onChangeText={action('change')}
    />
  ))
  .add('Number input', () => (
    <TextInput
      size="small"
      label="Label"
      placeholder="Type something"
      type="number"
      onChangeText={action('change')}
    />
  ))
  .add('Password input', () => (
    <TextInput
      size="small"
      label="Label"
      placeholder="Type something"
      type="password"
      onChangeText={action('change')}
    />
  ))
  .add('Error input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      onChangeText={action('change')}
      error="I'm Error"
    />
  ))
  .add('Help input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      onChangeText={action('change')}
      help="I'm Helper"
    />
  ))
  .add('Required field', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      required
      onChangeText={action('change')}
    />
  ))
  .add('With text prefix', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      prefix="$"
      onChangeText={action('change')}
    />
  ))
  .add('With icon prefix', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      prefix={<Icon name="search" />}
      onChangeText={action('change')}
    />
  ))
  .add('Compact input', () => (
    <TextInput
      label="Label"
      inlineLabel
      placeholder="Type something"
      onChangeText={action('change')}
    />
  ))
  .add('With service logo suffix', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      suffix={<ServiceLogo name="VisaHQ" />}
      onChangeText={action('change')}
    />
  ));
