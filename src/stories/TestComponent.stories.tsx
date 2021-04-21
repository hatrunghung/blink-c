import React from 'react';
import { Story, Meta } from '@storybook/react';

import TestComponent from '../TestComponent/TestComponent';
import { TestComponentProps } from '../TestComponent/TestComponent.types';

export default {
  title: 'Test',
  component: TestComponent,
} as Meta;

const Template: Story<TestComponentProps> = args => <TestComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
};
