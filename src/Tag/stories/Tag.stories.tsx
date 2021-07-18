import React from 'react';
import { Story, Meta } from '@storybook/react';
import Tag from '../Tag';
import { Grid, Row, Col } from '../../Grid';
import { CheckCircle, ExclamationMarkCircle, CloseCircle } from 'blinkicon';

export default {
  title: 'Components/Tag/Tag',
  component: Tag,
} as Meta;

export const Default: Story = () => {
  return (
    <Grid>
      <Row>
        <Col textAlign="center">
          <Tag>Basic</Tag>
          <Tag>
            <span>Basic</span>
            <Tag.Close onClick={() => alert('this will be deleted')} />
          </Tag>
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
              <ExclamationMarkCircle />
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
    </Grid>
  );
};
