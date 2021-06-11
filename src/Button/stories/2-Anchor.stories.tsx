import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AnchorButton } from '../';
import { Col, Grid, Row } from '../../Grid';
export default {
  title: 'Components/Button/AnchorButton',
  component: AnchorButton,
} as Meta;

export const Default: Story = ({ anchorText, isDanger, isExternal }) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <AnchorButton isDanger={isDanger} isExternal={isExternal}>
          {anchorText}
        </AnchorButton>
      </Col>
    </Row>
  </Grid>
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
