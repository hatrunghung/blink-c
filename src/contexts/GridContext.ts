import { createContext, useContext } from 'react';
import { GRID_NUMBER, SPACE } from '../Grid/types';

export interface IGridContext {
  columns?: GRID_NUMBER;
  gutters?: SPACE;
  debug?: boolean;
}

export const GridContext = createContext<IGridContext>({});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGridContext = () => {
  const context = useContext(GridContext);

  if (!context) {
    throw new Error('You must use the component within <Grid /> component');
  }

  return context;
};
