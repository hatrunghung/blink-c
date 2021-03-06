import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import Notification from '../Notification';
import { Flex, Row, Col } from '../../Flex';
import NotificationIcon from '../NotificationIcon';
import NotificationClose from '../NotificationClose';
import NotificationTitle from '../NotificationTitle';
import NotificationDescription from '../NotificationDescription';

export default {
  title: 'Components/Notification/Alert',
  subcomponents: {
    Notification,
    'Notification.Icon': NotificationIcon,
    'Notification.Close': NotificationClose,
    'Notification.Title': NotificationTitle,
    'Notification.Description': NotificationDescription,
  },
} as Meta;

const StyledDivider = styled.div`
  margin-bottom: ${props => props.theme.space.md};
`;

export const Default: Story = ({ type }) => {
  return (
    <Flex>
      <Row>
        <Col>
          <Notification isAlert={true} type={type}>
            <Notification.Title>
              {type.charAt(0).toUpperCase() + type.slice(1)} Notes
            </Notification.Title>
          </Notification>

          <StyledDivider />

          <Notification isAlert={true} type={type}>
            <Notification.Icon />
            <Notification.Title>
              {type.charAt(0).toUpperCase() + type.slice(1)} Notes
            </Notification.Title>
          </Notification>

          <StyledDivider />

          <Notification isAlert={true} type={type}>
            <Notification.Title>
              {type.charAt(0).toUpperCase() + type.slice(1)} Notes
            </Notification.Title>
            <Notification.Description>
              Interactively monetize corporate alignments and fully tested niche
              markets
            </Notification.Description>
          </Notification>

          <StyledDivider />

          <Notification isAlert={true} type={type}>
            <Notification.Icon />
            <Notification.Title>
              {type.charAt(0).toUpperCase() + type.slice(1)} Notes
            </Notification.Title>
            <Notification.Description>
              Interactively monetize corporate alignments and fully tested niche
              markets
            </Notification.Description>
          </Notification>

          <StyledDivider />

          <Notification isAlert={true} type={type}>
            <Notification.Icon />
            <Notification.Title>
              {type.charAt(0).toUpperCase() + type.slice(1)} Notes
            </Notification.Title>
            <Notification.Description>
              Interactively monetize corporate alignments and fully tested niche
              markets
            </Notification.Description>
            <Notification.Close />
          </Notification>
        </Col>
      </Row>
    </Flex>
  );
};

Default.args = {
  type: 'info',
};

Default.argTypes = {
  type: {
    control: {
      type: 'radio',
      options: ['info', 'warning', 'success', 'danger'],
    },
  },
};
