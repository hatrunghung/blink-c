import { FC, useState, useEffect, useCallback } from 'react';
import { IToast } from './types';
import { useToast } from '../../hooks';

interface IToastProps {
  toast: IToast;
}

export const Toast: FC<IToastProps> = ({ toast }) => {
  const [remainingTime, setRemainingTime] = useState(NaN);

  const { remove } = useToast();
  const { id } = toast;
  const { autoDismiss } = toast.options;

  useEffect(() => {
    if (typeof autoDismiss === 'number') {
      setRemainingTime(autoDismiss);
    } else {
      setRemainingTime(NaN);
    }
  }, []);

  useEffect(() => {
    let timeout;

    if (!isNaN(remainingTime)) {
      timeout = setTimeout(() => {
        remove(id);
      }, remainingTime);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [id, remainingTime, remove]);

  const onDismiss = useCallback(() => {
    remove(id);
  }, [remove, id]);

  return toast.content({ onDismiss });
};
