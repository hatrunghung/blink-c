import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../';
import { Col, Grid, Row } from '../../Grid';
import { Download16, ChevronDown16 } from 'blinkicon';

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
  startIcon,
  endIcon,
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
          {startIcon && (
            <Button.StartIcon>
              <Download16
                style={{
                  width: '16px',
                  height: '16px',
                }}
              />
            </Button.StartIcon>
          )}
          {buttonText}
          {endIcon && (
            <Button.EndIcon>
              <ChevronDown16 />
            </Button.EndIcon>
          )}
        </Button>
      </Col>
    </Row>
  </Grid>
);

Default.args = {
  buttonText: 'Download',
};

Default.argTypes = {
  buttonText: {
    control: 'text',
  },
  disabled: {
    control: 'boolean',
  },
  startIcon: {
    control: 'boolean',
  },
  endIcon: {
    control: 'boolean',
  },
};
