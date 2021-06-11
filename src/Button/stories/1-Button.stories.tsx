import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../';
import { Col, Grid, Row } from '../../Grid';

export default {
  title: 'Components/Button/Button',
  component: Button,
} as Meta;

export const Default: Story = ({
  buttonText,
  isPrimary,
  isDanger,
  isBasic,
  shape,
  isLink,
  isStretched,
  focusInset,
  disabled,
  size,
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Button
          isPrimary={isPrimary}
          isDanger={isDanger}
          isBasic={isBasic}
          shape={shape}
          isLink={isLink}
          isStretched={isStretched}
          focusInset={focusInset}
          disabled={disabled}
          size={size}
        >
          {buttonText}
        </Button>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  buttonText: 'Test Button',
};

Default.argTypes = {
  buttonText: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
};
