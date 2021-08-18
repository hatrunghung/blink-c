import { IToastState, IToastReducerAction } from './types';

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
