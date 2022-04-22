import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignupBeerIcon from './signupBeerIcon';

export default {
  Component: SignupBeerIcon,
  title: 'Commons/Icons/회원가입맥주아이콘',
} as ComponentMeta<typeof SignupBeerIcon>;

const Template: ComponentStory<typeof SignupBeerIcon> = args => <SignupBeerIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 650,
  height: 430,
  onClick: () => {
    alert('clicked');
  },
};
