import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../';
import { Col, Flex, Row } from '../../Flex';
import { Download, ChevronDown } from 'blinkicon';

export default {
  title: 'Components/Button/Button',
  component: Button,
} as Meta;

export const Default: Story = ({
  buttonText,
  isPrimary,
  isWarning,
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
  <Flex>
    <Row>
      <Col textAlign="center">
        <Button
          isPrimary={isPrimary}
          isWarning={isWarning}
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
              <Download
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
              <ChevronDown />
            </Button.EndIcon>
          )}
        </Button>
      </Col>
    </Row>
  </Flex>
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
