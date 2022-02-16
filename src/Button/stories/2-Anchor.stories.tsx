import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AnchorButton } from '../';
import { Col, Flex, Row } from '../../Flex';
export default {
  title: 'Components/Button/AnchorButton',
  component: AnchorButton,
} as Meta;

export const Default: Story = ({ anchorText, isDanger, isExternal }) => (
  <Flex>
    <Row>
      <Col textAlign="center">
        <AnchorButton isDanger={isDanger} isExternal={isExternal}>
          {anchorText}
        </AnchorButton>
      </Col>
    </Row>
  </Flex>
);

Default.args = {
  anchorText: 'Test Anchor',
};

Default.argTypes = {
  anchorText: {
    control: 'text',
  },
  isDanger: {
    control: 'boolean',
  },
  isExternal: {
    control: 'boolean',
  },
};
