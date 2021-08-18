import { FC, useCallback } from 'react';
import { IToast } from './toastReducer';
import { useToast } from './useToast';

interface IToastProps {
  toast: IToast;
}

export const Toast: FC<IToastProps> = ({ toast }) => {
  const { remove } = useToast();

  const onDismiss = useCallback(() => {
    remove(toast.id);
  }, [remove, toast.id]);

  return toast.content({ onDismiss });
};
