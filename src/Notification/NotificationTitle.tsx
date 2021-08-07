import React, { forwardRef, HTMLAttributes } from 'react';
import { StyledNotificationTitle } from './StyledNotificationTitle';
import { useNotificationContext } from '../contexts/useNotificationContext';

const NotificationTitle = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement>
>(({ children, ...props }, ref) => {
  const { type } = useNotificationContext();

  return (
    <StyledNotificationTitle ref={ref} type={type} {...props}>
      {children}
    </StyledNotificationTitle>
  );
});

NotificationTitle.displayName = 'NotificationTitle';

export default NotificationTitle;
