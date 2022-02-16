import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IconButton } from '../';
import { Col, Flex, Row } from '../../Flex';
import { Delete, Send, Home, ChevronDown } from 'blinkicon';
import styled from 'styled-components';

export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
} as Meta;

const StyledDiv = styled.div`
  margin: 10px;
`;

export const Default: Story = ({
  isPrimary,
  isDanger,
  isBasic,
  shape,
  size,
  isRotated,
  disabled,
  focusInset,
}) => (
  <Flex>
    <Row>
      <Col textAlign="center">
        <StyledDiv>
          <IconButton
            title="Down"
            aria-label="Down"
            isPrimary={isPrimary}
            isDanger={isDanger}
            isRotated={isRotated}
            isBasic={isBasic}
            shape={shape}
            size={size}
            disabled={disabled}
            focusInset={focusInset}
          >
            <ChevronDown />
          </IconButton>
        </StyledDiv>
        <StyledDiv>
          <IconButton
            title="Delete"
            aria-label="Delete"
            isPrimary={isPrimary}
            isDanger={isDanger}
            isRotated={isRotated}
            isBasic={isBasic}
            shape={shape}
            size={size}
            disabled={disabled}
            focusInset={focusInset}
          >
            <Delete />
          </IconButton>
        </StyledDiv>
        <StyledDiv>
          <IconButton
            title="Send"
            aria-label="Send"
            isPrimary={isPrimary}
            isDanger={isDanger}
            isRotated={isRotated}
            isBasic={isBasic}
            shape={shape}
            size={size}
            disabled={disabled}
            focusInset={focusInset}
          >
            <Send />
          </IconButton>
        </StyledDiv>
        <StyledDiv>
          <IconButton
            title="Home"
            aria-label="Home"
            isPrimary={isPrimary}
            isDanger={isDanger}
            isRotated={isRotated}
            isBasic={isBasic}
            shape={shape}
            size={size}
            disabled={disabled}
            focusInset={focusInset}
          >
            <Home />
          </IconButton>
        </StyledDiv>
      </Col>
    </Row>
  </Flex>
);

Default.argTypes = {
  isPrimary: {
    control: 'boolean',
  },
  disabled: {
    control: 'boolean',
  },
};
