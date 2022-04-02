import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Kbd } from '../Kbd';

export default {
  title: 'Typography/Kbd',
  components: Kbd,
} as Meta;

export const Default: Story = () => {
  return (
    <>
      <div>
        <span>
          <Kbd>Shift</Kbd> + <Kbd>H</Kbd>
        </span>
      </div>

      <div>
        <span>
          Press <Kbd>ctrl</Kbd> + <Kbd>C</Kbd> to copy
        </span>
      </div>
    </>
  );
};
