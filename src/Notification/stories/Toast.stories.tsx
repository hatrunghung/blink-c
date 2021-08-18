/* eslint-disable jsx-a11y/no-onchange */
import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react';
import { Button } from '../../Button';
import { Grid, Row, Col } from '../../Grid';
import { useToast } from '../Toast/useToast';
import { ToastProvider } from '../Toast/ToastProvider';
import { ToastPlacement } from '../Toast/toastReducer';
import Notification from '../Notification';

export default {
  title: 'Components/Notification/Toast',
  components: ToastProvider,
} as Meta;

type VALIDATION_TYPE = 'info' | 'warning' | 'success' | 'danger';

const StyledRow = styled(Row)`
  margin-bottom: ${props => props.theme.space.sm};
`;

const NotificationExample: FC = () => {
  const [placement, setPlacement] = useState<ToastPlacement>('top-end');
  const { add, removeAll } = useToast();

  const addNewNotification = useCallback(
    (type: VALIDATION_TYPE = 'info') => {
      add(
        ({ onDismiss }) => (
          <Notification type={type}>
            <Notification.Icon />
            <Notification.Title>
              {type.charAt(0).toUpperCase() + type.slice(1)} Notes
            </Notification.Title>
            <Notification.Description>
              Interactively monetize corporate alignments and fully tested niche
              markets
            </Notification.Description>
            <Notification.Close onClick={onDismiss} />
          </Notification>
        ),
        { placement },
      );
    },
    [add, placement],
  );

  return (
    <>
      <StyledRow>
        <Col>
          <select
            value={placement}
            onChange={event => setPlacement(event.target.value)}
          >
            <option value="top-start">top-start</option>
            <option value="top">top</option>
            <option value="top-end">top-end</option>
            <option value="bottom-start">bottom-start</option>
            <option value="bottom">bottom</option>
            <option value="bottom-end">bottom-end</option>
          </select>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <Button onClick={() => addNewNotification('info')} isStretched>
            Add Info Notification
          </Button>
          <Button onClick={() => addNewNotification('warning')} isStretched>
            Add Warning Notification
          </Button>
          <Button onClick={() => addNewNotification('success')} isStretched>
            Add Success Notification
          </Button>
          <Button onClick={() => addNewNotification('danger')} isStretched>
            Add Danger Notification
          </Button>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col>
          <Button onClick={() => removeAll()} isDanger isStretched>
            Remove all
          </Button>
        </Col>
      </StyledRow>
    </>
  );
};

export const Default: Story = () => {
  return (
    <Grid>
      <Row>
        <Col sm={24} offsetSm={0} md={12} offsetMd={6} lg={8} offsetLg={8}>
          <ToastProvider>
            <NotificationExample />
          </ToastProvider>
        </Col>
      </Row>
    </Grid>
  );
};

Default.args = {
  placement: 'top-end',
};

Default.argTypes = {
  placement: {
    control: {
      type: 'radio',
      options: [
        'top-start',
        'top',
        'top-end',
        'bottom-start',
        'bottom',
        'bottom-end',
      ],
    },
  },
};
