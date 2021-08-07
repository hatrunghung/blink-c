import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { StyledNotification } from './StyledNotification';
import NotificationClose from './NotificationClose';
import NotificationTitle from './NotificationTitle';
import NotificationIcon from './NotificationIcon';
import NotificationDescription from './NotificationDescription';
import { NotificationContext } from '../contexts/useNotificationContext';

export interface INotificationProps extends HTMLAttributes<HTMLDivElement> {
  type: 'info' | 'warning' | 'success' | 'danger';
  isAlert?: boolean;
}

const Notification = forwardRef<HTMLDivElement, INotificationProps>(
  ({ type, isAlert, children, ...props }, ref) => {
    const value = useMemo(() => ({ type, isAlert }), [type, isAlert]);

    return (
      <NotificationContext.Provider value={value}>
        <StyledNotification
          ref={ref}
          isAlert={isAlert}
          type={type}
          role={isAlert ? 'alert' : 'status'}
          {...props}
        >
          {children}
        </StyledNotification>
      </NotificationContext.Provider>
    );
  },
);

Notification.displayName = 'Notification';

Notification.defaultProps = {
  type: 'info',
};

Notification.propTypes = {
  type: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
  isAlert: PropTypes.bool,
};

(Notification as any).Icon = NotificationIcon;
(Notification as any).Close = NotificationClose;
(Notification as any).Title = NotificationTitle;
(Notification as any).Description = NotificationDescription;

export default Notification as ForwardRefExoticComponent<
  INotificationProps & RefAttributes<HTMLDivElement>
> & {
  Icon: typeof NotificationIcon;
  Close: typeof NotificationClose;
  Title: typeof NotificationTitle;
  Description: typeof NotificationDescription;
};
