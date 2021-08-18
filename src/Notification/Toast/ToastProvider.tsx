import React, { FC, useMemo, useReducer, useCallback } from 'react';
import toastReducer from './toastReducer';
import { IToastState, ToastPlacement } from './types';
import { ToastContainer } from './ToastContainer';
import { ToastContext } from '../../contexts/ToastContext';

function getInitialState(): IToastState {
  return {
    toasts: [],
  };
}

export const ToastProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, getInitialState());

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  const placeToast = useCallback(
    (placement: ToastPlacement) => {
      let matchingToasts = state.toasts.filter(
        toast => toast.options.placement === placement,
      );

      if (
        placement === 'bottom' ||
        placement === 'bottom-start' ||
        placement === 'bottom-end'
      ) {
        matchingToasts = matchingToasts.reverse();
      }

      return <ToastContainer toasts={matchingToasts} placement={placement} />;
    },
    [state.toasts],
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {placeToast('top-start')}
      {placeToast('top')}
      {placeToast('top-end')}
      {children}
      {placeToast('bottom-start')}
      {placeToast('bottom')}
      {placeToast('bottom-end')}
    </ToastContext.Provider>
  );
};

ToastProvider.displayName = 'ToastProvider';
