import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LoginIcon from './loginIcon';

export default {
  Component: LoginIcon,
  title: 'Commons/Icons/로그인 아이콘',
} as ComponentMeta<typeof LoginIcon>;

const Template: ComponentStory<typeof LoginIcon> = args => <LoginIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 24,
  height: 24,
  onClick: () => {
    alert('clicked');
  },
};
