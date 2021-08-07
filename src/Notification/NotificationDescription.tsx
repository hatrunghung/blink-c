import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledNotificationDescription } from './StyledNotificationDescription';
import { useNotificationContext } from '../contexts/useNotificationContext';

const NotificationDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ children, ...props }, ref) => {
  const { type } = useNotificationContext();

  return (
    <StyledNotificationDescription ref={ref} type={type} {...props}>
      {children}
    </StyledNotificationDescription>
  );
});

NotificationDescription.displayName = 'NotificationDescription';

export default NotificationDescription;
