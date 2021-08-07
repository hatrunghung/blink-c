import { createContext, useContext } from 'react';

export interface INotificationContext {
  type: 'info' | 'warning' | 'success' | 'danger';
  isAlert?: boolean;
}

export const NotificationContext = createContext<
  INotificationContext | undefined
>(undefined);

export const useNotificationContext = (): INotificationContext => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      'You must use the component within <Notification /> component',
    );
  }

  return context;
};
