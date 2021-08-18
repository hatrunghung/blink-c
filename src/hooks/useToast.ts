import { useContext, useCallback } from 'react';
import { uid } from 'react-uid';
import { ToastContext } from '../contexts/ToastContext';
import {
  IToast,
  IToastOptions,
  ToastContent,
  IUseToastReturnValue,
} from '../Notification/Toast/types';

const DEFAULT_TOAST_OPTIONS = {
  placement: 'top-end',
};

export const useToast = (): IUseToastReturnValue => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      'This component must use within <ToastProvider /> component',
    );
  }

  const { state, dispatch } = context;

  const addToast = useCallback(
    (content: ToastContent, options: IToastOptions) => {
      const mergedOptions = {
        ...DEFAULT_TOAST_OPTIONS,
        ...options,
      };
      const newToast: IToast = {
        id: mergedOptions.id || uid(content),
        content,
        options: mergedOptions,
      };

      dispatch({ type: 'ADD', payload: newToast });
    },
    [dispatch],
  );

  const removeToast = useCallback(
    (removeId: string) => {
      dispatch({ type: 'REMOVE', payload: { id: removeId } });
    },
    [dispatch],
  );

  const removeAllToast = useCallback(() => {
    dispatch({ type: 'REMOVE_ALL' });
  }, [dispatch]);

  return {
    add: addToast,
    remove: removeToast,
    removeAll: removeAllToast,
    toasts: state.toasts,
  };
};
