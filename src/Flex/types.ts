export type JUSTIFY_CONTENT =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';
export const ArrayJustifyContent: Array<JUSTIFY_CONTENT> = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly',
];

export type ALIGN_ITEMS = 'start' | 'end' | 'center' | 'stretch';
export const ArrayAlignItems: Array<ALIGN_ITEMS> = [
  'start',
  'end',
  'center',
  'stretch',
];

export type ALIGN_SELF = 'auto' | ALIGN_ITEMS;
export const ArrayAlignSelf: Array<ALIGN_SELF> = [
  'auto',
  'start',
  'end',
  'center',
  'stretch',
];

export type DIRECTION = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export const ArrayDirection: Array<DIRECTION> = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
];

export type TEXT_ALIGN = 'left' | 'right' | 'center' | 'justify';
export const ArrayTextAlign: Array<TEXT_ALIGN> = [
  'left',
  'right',
  'center',
  'justify',
];

export type FLEX_NUMBER = string | number;
export type BREAKPOINT = FLEX_NUMBER | boolean;

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
export const ArraySpace: Array<SPACE> = [
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

export type WRAP = 'wrap' | 'nowrap' | 'wrap-reverse';
export const ArrayWrap: Array<WRAP> = ['wrap', 'nowrap', 'wrap-reverse'];
