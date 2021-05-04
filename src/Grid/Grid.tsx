import React, { HTMLAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { GridContext } from '../contexts/GridContext';
import { StyledGrid } from './StyledGrid';
import { ArraySpace, GRID_NUMBER, SPACE } from './types';

export interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  gutters?: SPACE;
  columns?: GRID_NUMBER;
  debug?: boolean;
}

const Grid = forwardRef<HTMLDivElement, IGridProps>((props, ref) => {
  const value = React.useMemo(
    () => ({
      columns: props.columns,
      gutters: props.gutters,
      debug: props.debug,
    }),
    [props.columns, props.gutters, props.debug],
  );

  return (
    <GridContext.Provider value={value}>
      <StyledGrid debug={props.debug} ref={ref} {...props} />
    </GridContext.Provider>
  );
});

Grid.displayName = 'Grid';

Grid.propTypes = {
  debug: PropTypes.bool,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutters: PropTypes.oneOf(ArraySpace),
};

export default Grid;
