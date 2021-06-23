import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ToggleButton } from '../';
import { Col, Grid, Row } from '../../Grid';

export default {
  title: 'Components/Button/ToggleButton',
  component: ToggleButton,
} as Meta;

export const Default: Story = ({
  buttonText,
  isPressed,
  isPrimary,
  isDanger,
  isBasic,
  shape,
  size,
  isLink,
  isStretched,
}) => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <ToggleButton
          isPrimary={isPrimary}
          isDanger={isDanger}
          isBasic={isBasic}
          shape={shape}
          size={size}
          isLink={isLink}
          isStretched={isStretched}
          isPressed={isPressed}
        >
          {buttonText}
        </ToggleButton>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  buttonText: 'Test Toggle Button',
};

Default.argTypes = {
  buttonText: {
    control: 'text',
  },
  isPressed: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
  isPrimary: {
    control: 'boolean',
  },
};

Default.parameters = {
  docs: {
    description: {
      component: `
The following example demonstrates a [toggle button](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#Toggle_buttons).
Either click or use the keyboard to toggle each button's pressed state.
      `,
    },
  },
};
