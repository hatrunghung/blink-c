import React, {
  ForwardRefExoticComponent,
  forwardRef,
  HTMLAttributes,
  RefAttributes,
} from 'react';
import PropTypes from 'prop-types';
import { StyledGrid } from './styles/StyledGrid';
import { Array_Fit, Array_Space, FIT, GRID_NUMBER, SPACE } from './types';
import GridItem, { IGridItemProps } from './GridItem';

export interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: GRID_NUMBER;
  rows?: GRID_NUMBER | 'auto';
  filling?: FIT;
  colMinWidth?: string;
  colGap?: SPACE;
  rowGap?: SPACE;
}

type GridComponent = ForwardRefExoticComponent<IGridProps> &
  RefAttributes<HTMLDivElement> & {
    Item: ForwardRefExoticComponent<IGridItemProps>;
  };

const Grid = forwardRef<HTMLDivElement, IGridProps>(
  (
    {
      columns,
      rows,
      filling,
      colMinWidth,
      colGap = 'md',
      rowGap = 'md',
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledGrid
        columns={columns}
        rows={rows}
        filling={filling}
        colMinWidth={colMinWidth}
        colGap={colGap}
        rowGap={rowGap}
        ref={ref}
        {...props}
      >
        {children}
      </StyledGrid>
    );
  },
);

Grid.displayName = 'Grid';

(Grid as GridComponent).Item = GridItem;

Grid.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  filling: PropTypes.oneOf(Array_Fit),
  colMinWidth: PropTypes.string,
  colGap: PropTypes.oneOf(Array_Space),
  rowGap: PropTypes.oneOf(Array_Space),
};

export default Grid as GridComponent;
