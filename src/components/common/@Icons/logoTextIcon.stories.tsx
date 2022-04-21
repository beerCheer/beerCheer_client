import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LogoTextIcon from './logoTextIcon';

export default {
  Component: LogoTextIcon,
  title: '로고 텍스트',
} as ComponentMeta<typeof LogoTextIcon>;

const Template: ComponentStory<typeof LogoTextIcon> = args => <LogoTextIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 107,
  height: 29,
  onClick: () => {
    alert('clicked');
  },
};
