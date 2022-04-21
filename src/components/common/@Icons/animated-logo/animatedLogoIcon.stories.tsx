import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AnimatedLogoIcon from './animatedLogoIcon';

export default {
  Component: AnimatedLogoIcon,
  title: 'Commons/Icons/애니메이션 로그인 아이콘',
} as ComponentMeta<typeof AnimatedLogoIcon>;

const Template: ComponentStory<typeof AnimatedLogoIcon> = args => <AnimatedLogoIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  textWidth: 107,
  textHeight: 29,
  symbolWidth: 50,
  symbolHeight: 50,
  onClick: () => {
    alert('clicked');
  },
};
