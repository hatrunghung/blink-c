import { ReactElement, Dispatch } from 'react';

// toast placement type
export type ToastPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end';

// toast content & option type
export type ToastContent = ({
  onDismiss,
}: {
  onDismiss: () => void;
}) => ReactElement;

export interface IToastOptions<T = any> {
  placement: ToastPlacement;
  autoDismiss?: boolean | number;
  data?: T;
}

// toast interface
export interface IToast {
  id: string;
  content: ToastContent;
  options: IToastOptions;
}

// toastReducer state type & action type
export interface IToastState {
  toasts: IToast[];
}

export type IToastReducerAction =
  | { type: 'ADD'; payload: IToast }
  | { type: 'REMOVE'; payload: Pick<IToast, 'id'> }
  | { type: 'REMOVE_ALL' };

// useToast return type
export interface IUseToastReturnValue {
  add: (content: ToastContent, options: IToastOptions) => void;
  remove: (removeId: string) => void;
  removeAll: () => void;
  toasts: IToast[];
}

// Toast Context type
export interface IToastContext {
  state: IToastState;
  dispatch: Dispatch<IToastReducerAction>;
}
