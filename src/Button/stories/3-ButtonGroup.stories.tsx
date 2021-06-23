import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonGroup } from '../';
import { Col, Grid, Row } from '../../Grid';

export default {
  title: 'Components/Button/ButtonGroup',
  component: ButtonGroup,
} as Meta;

export const Default: Story = ({
  disabled,
  isPrimary,
  isDanger,
  size,
  shape,
}) => {
  const [selectedItem, setSelectedItem] = useState('button-1');

  return (
    <Grid>
      <Row>
        <Col textAlign="center">
          <ButtonGroup selectedItem={selectedItem} onSelect={setSelectedItem}>
            <Button
              value="button-1"
              isPrimary={isPrimary}
              isDanger={isDanger}
              disabled={disabled}
              size={size}
              shape={shape}
            >
              Button 1
            </Button>
            <Button
              value="button-2"
              isPrimary={isPrimary}
              isDanger={isDanger}
              disabled={disabled}
              size={size}
              shape={shape}
            >
              Button 2
            </Button>
            <Button
              value="button-3"
              isPrimary={isPrimary}
              isDanger={isDanger}
              disabled={disabled}
              size={size}
              shape={shape}
            >
              Button 3
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Grid>
  );
};

Default.argTypes = {
  disabled: {
    control: 'boolean',
  },
  isPrimary: {
    control: 'boolean',
  },
  isDanger: {
    control: 'boolean',
  },
  size: {
    control: { type: 'radio', options: ['small', 'medium', 'large'] },
  },
  shape: {
    control: { type: 'radio', options: ['normal', 'round', 'pill'] },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: `The \`ButtonGroup\` component requires the following structure. \`Button\` components
      require a unique value. All components accept attributes and events for their
      native DOM elements.`,
    },
  },
};
