import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Paragraph } from '../Paragraph';
import { Flex, Row, Col } from '../../Flex';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
} as Meta;

export const Default: Story = ({ size, isBold }) => {
  return (
    <Flex>
      <Row>
        <Col>
          <Paragraph size={size} isBold={isBold}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Col>
      </Row>
    </Flex>
  );
};

Default.args = {
  size: 'medium',
  isBold: false,
};

Default.argTypes = {
  size: {
    control: {
      type: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
  isBold: {
    control: 'boolean',
  },
};
