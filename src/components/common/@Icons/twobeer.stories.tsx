import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TwoBeerIcon from './twobeerIcon';

export default {
  Component: TwoBeerIcon,
  title: 'Commons/Icons/맥주 두개 아이콘',
} as ComponentMeta<typeof TwoBeerIcon>;

const Template: ComponentStory<typeof TwoBeerIcon> = args => <TwoBeerIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 64,
  height: 64,
  onClick: () => {
    alert('clicked');
  },
};
