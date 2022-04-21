import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

export default {
  Component: Button,
  title: 'Commons/버튼',
  decorators: [story => <div style={{ width: '500px', backgroundColor: '#ececec', padding: '24px' }}>{story()}</div>],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  size: 'medium',
  block: false,
  children: '버튼',
  color: '#fba42a',
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: 'large',
  block: false,
  children: '버튼',
  color: '#fba42a',
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: 'small',
  block: false,
  children: '버튼',
  color: '#fba42a',
};
