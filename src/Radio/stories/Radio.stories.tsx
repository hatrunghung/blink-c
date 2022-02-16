import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { Radio } from '../';
import { Flex, Row, Col } from '../../Flex';

export default {
  title: 'Forms/Radio/Radio',
  component: Radio,
} as Meta;

const StyledQuestion = styled.span`
  margin-left: 20px;
`;

export const Default: Story = () => {
  const [active, setActive] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setActive(event.currentTarget.value);
  };

  return (
    <Flex>
      <Row>
        <Col>
          <StyledQuestion>Blackpink fandom ?</StyledQuestion>
          <Radio
            id="army"
            value="army"
            onChange={handleChange}
            checked={active === 'army'}
          >
            Army
          </Radio>
          <Radio
            id="blink"
            value="blink"
            onChange={handleChange}
            checked={active === 'blink'}
          >
            Blink
          </Radio>
          <Radio
            id="once"
            value="once"
            onChange={handleChange}
            checked={active === 'once'}
          >
            Once
          </Radio>
        </Col>
      </Row>
    </Flex>
  );
};
