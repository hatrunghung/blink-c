import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  HeadingLG,
  HeadingMD,
  HeadingSM,
  HeadingXL,
  HeadingXS,
  HeadingXXL,
  HeadingXXXL,
} from '../Heading';

export default {
  title: 'Typography/Heading',
} as Meta;

export const Default: Story = () => {
  return (
    <div>
      <HeadingXXXL>(3xl) - Blackpink in your Area!</HeadingXXXL>
      <HeadingXXL>(2xl) - Blackpink in your Area!</HeadingXXL>
      <HeadingXL>(xl) - Blackpink in your Area!</HeadingXL>
      <HeadingLG>(lg) - Blackpink in your Area!</HeadingLG>
      <HeadingMD>(md) - Blackpink in your Area!</HeadingMD>
      <HeadingSM>(sm) - Blackpink in your Area!</HeadingSM>
      <HeadingXS>(xs) - Blackpink in your Area!</HeadingXS>
    </div>
  );
};
