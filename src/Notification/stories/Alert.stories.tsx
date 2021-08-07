import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import Notification from '../Notification';
import { Grid, Row, Col } from '../../Grid';
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

export const Default: Story = ({
  type,
  notificationTitle,
  notificationDescription,
}) => {
  return (
    <Grid>
      <Row>
        <Col>
          <Notification isAlert={true} type={type}>
            <Notification.Title>{notificationTitle}</Notification.Title>
          </Notification>

          <StyledDivider />

          <Notification isAlert={true} type={type}>
            <Notification.Icon />
            <Notification.Title>{notificationTitle}</Notification.Title>
          </Notification>

          <StyledDivider />

          <Notification isAlert={true} type={type}>
            <NotificationTitle>{notificationTitle}</NotificationTitle>
            <Notification.Description>
              {notificationDescription}
            </Notification.Description>
          </Notification>

          <StyledDivider />

          <Notification isAlert={true} type={type}>
            <Notification.Icon />
            <Notification.Title>{notificationTitle}</Notification.Title>
            <Notification.Description>
              {notificationDescription}
            </Notification.Description>
          </Notification>

          <StyledDivider />

          <Notification isAlert={true} type={type}>
            <Notification.Icon />
            <Notification.Title>{notificationTitle}</Notification.Title>
            <Notification.Description>
              {notificationDescription}
            </Notification.Description>
            <Notification.Close />
          </Notification>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  notificationTitle: 'Informational Notes',
  notificationDescription:
    'Interactively monetize corporate alignments and fully tested niche markets',
};

Default.argTypes = {
  notificationTitle: {
    control: 'text',
  },
  notificationDescription: {
    control: 'text',
  },
  type: {
    control: {
      type: 'radio',
      options: ['info', 'warning', 'success', 'danger'],
    },
  },
};
