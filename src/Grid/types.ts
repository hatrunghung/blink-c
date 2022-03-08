export type GRID_NUMBER = number | string;

export type SPACE =
  | 'base'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl';

export const Array_Space: Array<SPACE> = [
  'base',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
];

export type FIT = 'fit' | 'fill' | false;

export const Array_Fit: Array<FIT> = ['fit', 'fill', false];
