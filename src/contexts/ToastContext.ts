import { createContext } from 'react';
import { IToastContext } from '../Notification/Toast/types';

export const ToastContext = createContext<IToastContext | undefined>(undefined);
