import { createContext, useContext } from 'react';
import { FLEX_NUMBER, SPACE } from '../Flex/types';

export interface IFlexContext {
  columns?: FLEX_NUMBER;
  gutters?: SPACE;
  debug?: boolean;
}

export const FlexContext = createContext<IFlexContext>({});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useFlexContext = () => {
  const context = useContext(FlexContext);

  if (!context) {
    throw new Error('You must use the component within <Flex /> component');
  }

  return context;
};
