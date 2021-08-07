import React, { forwardRef, HTMLAttributes } from 'react';
import { Declined } from 'blinkicon';
import { StyledButtonClose } from './StyledButtonClose';
import { useNotificationContext } from '../contexts/useNotificationContext';

const NotificationClose = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { type, isAlert } = useNotificationContext();

  return (
    <StyledButtonClose
      ref={ref}
      aria-label={isAlert ? 'Close Alert' : 'Close Notification'}
      notificationType={type}
      {...props}
    >
      <Declined />
    </StyledButtonClose>
  );
});

NotificationClose.displayName = 'NotificationClose';

export default NotificationClose;
