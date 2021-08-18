import { FC, useCallback } from 'react';
import { IToast } from './types';
import { useToast } from '../../hooks';

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
