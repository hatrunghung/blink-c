import { ReactElement } from 'react';

export type ToastPlacement =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end';

export type ToastContent = ({
  onDismiss,
}: {
  onDismiss: () => void;
}) => ReactElement;

export interface IToastOptions<T = any> {
  id?: string;
  placement: ToastPlacement;
  data?: T;
}

export interface IToast {
  id: string;
  content: ToastContent;
  options: IToastOptions;
}

export interface IToastState {
  toasts: IToast[];
}

export type IToastReducerAction =
  | { type: 'ADD'; payload: IToast }
  | { type: 'REMOVE'; payload: Pick<IToast, 'id'> }
  | { type: 'REMOVE_ALL' };

export default function toastReducer(
  state: IToastState,
  action: IToastReducerAction,
): IToastState {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case 'REMOVE':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload.id),
      };
    case 'REMOVE_ALL':
      return {
        ...state,
        toasts: [],
      };
    default:
      throw new Error('Invalid toaster reducer action');
  }
}
