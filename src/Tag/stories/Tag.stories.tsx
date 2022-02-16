import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Tag from '../Tag';
import { Flex, Row, Col } from '../../Flex';
import { Button } from '../../Button';
import { CheckCircle, Stop, CloseCircle } from 'blinkicon';

export default {
  title: 'Components/Tag/Tag',
  component: Tag,
} as Meta;

export const Default: Story = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Flex>
      <Row>
        <Col textAlign="center">
          <Tag>Basic</Tag>
          {isOpen ? (
            <Tag>
              <span>Basic</span>
              <Tag.Close onClick={toggleOpen} />
            </Tag>
          ) : (
            <Button size="small" onClick={toggleOpen}>
              Open Tag again
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col textAlign="center">
          <Tag color="primary">Processing</Tag>
          <Tag color="warning">Warning</Tag>
          <Tag color="success">Success</Tag>
          <Tag color="danger">Danger</Tag>
        </Col>
      </Row>
      <Row>
        <Col textAlign="center">
          <Tag color="warning">
            <Tag.Icon>
              <Stop />
            </Tag.Icon>
            <span>Warning</span>
          </Tag>
          <Tag color="success">
            <Tag.Icon>
              <CheckCircle />
            </Tag.Icon>
            <span>Success</span>
          </Tag>
          <Tag color="danger">
            <Tag.Icon>
              <CloseCircle />
            </Tag.Icon>
            <span>Danger</span>
          </Tag>
        </Col>
      </Row>
      <Row>
        <Col textAlign="center">
          <Tag color="pink">Pink</Tag>
          <Tag color="gold">Gold</Tag>
          <Tag color="crimson">Crimson</Tag>
          <Tag color="volcano">Volcano</Tag>
          <Tag color="purple">Purple</Tag>
          <Tag color="lime">Lime</Tag>
          <Tag color="cyan">Cyan</Tag>
          <Tag color="azure">Azure</Tag>
          <Tag color="orange">Orange</Tag>
          <Tag color="lavender">Lavender</Tag>
        </Col>
      </Row>
      <Row>
        <Col textAlign="center">
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#87d068">#87d068</Tag>
        </Col>
      </Row>
    </Flex>
  );
};
