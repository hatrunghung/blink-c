import React, { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledGridItem } from './styles/StyledGridItem';

export interface IGridItemProps extends HTMLAttributes<HTMLDivElement> {
  isFullWidth?: boolean;
  column?: string;
  row?: string;
}

const GridItem = forwardRef<HTMLDivElement, IGridItemProps>(
  ({ isFullWidth, column, row, children, ...props }, ref) => {
    return (
      <StyledGridItem
        isFullWidth={isFullWidth}
        column={column}
        row={row}
        ref={ref}
        {...props}
      >
        {children}
      </StyledGridItem>
    );
  },
);

GridItem.displayName = 'GridItem';

GridItem.propTypes = {
  isFullWidth: PropTypes.bool,
  column: PropTypes.string,
  row: PropTypes.string,
};

export default GridItem;
