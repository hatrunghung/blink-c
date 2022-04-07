import { HTMLAttributes } from 'react';

export interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: string;
  color?: string;
}
