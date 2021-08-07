import React, { forwardRef, HTMLAttributes } from 'react';
import {
  CheckCircle,
  CloseCircle,
  CircleExclamationMark,
  Info,
} from 'blinkicon';
import { StyledIconWrapper } from './StyledIconWrapper';
import { useNotificationContext } from '../contexts/useNotificationContext';

const NotificationIcon = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { type } = useNotificationContext();

  let icon;

  if (type === 'danger') {
    icon = <CloseCircle />;
  } else if (type === 'success') {
    icon = <CheckCircle />;
  } else if (type === 'warning') {
    icon = <CircleExclamationMark />;
  } else {
    icon = <Info />;
  }

  return (
    <StyledIconWrapper ref={ref} type={type} {...props}>
      {icon}
    </StyledIconWrapper>
  );
});

NotificationIcon.displayName = 'NotificationIcon';

export default NotificationIcon;
