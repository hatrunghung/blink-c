import React, {
  createContext,
  Dispatch,
  FC,
  useMemo,
  useReducer,
  useCallback,
} from 'react';
import toastReducer, {
  IToastReducerAction,
  IToastState,
  ToastPlacement,
} from './toastReducer';
import { ToastContainer } from './ToastContainer';

export interface IToastContext {
  state: IToastState;
  dispatch: Dispatch<IToastReducerAction>;
}

export interface IToastProviderProps {
  placement: ToastPlacement;
}

export const ToastContext = createContext<IToastContext | undefined>(undefined);

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
