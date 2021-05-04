import React, { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledCol } from './StyledCol';
import {
  ALIGN_SELF,
  ArrayAlignSelf,
  ArrayTextAlign,
  BREAKPOINT,
  GRID_NUMBER,
  TEXT_ALIGN,
} from './types';
import { useGridContext } from '../contexts/GridContext';

export interface IColProps extends HTMLAttributes<HTMLDivElement> {
  size?: GRID_NUMBER;
  xs?: BREAKPOINT;
  sm?: BREAKPOINT;
  md?: BREAKPOINT;
  lg?: BREAKPOINT;
  xl?: BREAKPOINT;
  alignSelf?: ALIGN_SELF;
  alignSelfXs?: ALIGN_SELF;
  alignSelfSm?: ALIGN_SELF;
  alignSelfMd?: ALIGN_SELF;
  alignSelfLg?: ALIGN_SELF;
  alignSelfXl?: ALIGN_SELF;
  textAlign?: TEXT_ALIGN;
  textAlignXs?: TEXT_ALIGN;
  textAlignSm?: TEXT_ALIGN;
  textAlignMd?: TEXT_ALIGN;
  textAlignLg?: TEXT_ALIGN;
  textAlignXl?: TEXT_ALIGN;
  offset?: GRID_NUMBER;
  offsetXs?: GRID_NUMBER;
  offsetSm?: GRID_NUMBER;
  offsetMd?: GRID_NUMBER;
  offsetLg?: GRID_NUMBER;
  offsetXl?: GRID_NUMBER;
  order?: GRID_NUMBER;
  orderXs?: GRID_NUMBER;
  orderSm?: GRID_NUMBER;
  orderMd?: GRID_NUMBER;
  orderLg?: GRID_NUMBER;
  orderXl?: GRID_NUMBER;
}

const Col = forwardRef<HTMLDivElement, IColProps>((props, ref) => {
  const gridContext = useGridContext();

  return (
    <StyledCol
      size={props.size}
      columns={gridContext.columns}
      debug={gridContext.debug}
      gutters={gridContext.gutters}
      ref={ref}
      {...props}
    />
  );
});

Col.displayName = 'Col';

Col.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  alignSelf: PropTypes.oneOf(ArrayAlignSelf),
  alignSelfXs: PropTypes.oneOf(ArrayAlignSelf),
  alignSelfSm: PropTypes.oneOf(ArrayAlignSelf),
  alignSelfMd: PropTypes.oneOf(ArrayAlignSelf),
  alignSelfLg: PropTypes.oneOf(ArrayAlignSelf),
  alignSelfXl: PropTypes.oneOf(ArrayAlignSelf),
  textAlign: PropTypes.oneOf(ArrayTextAlign),
  textAlignXs: PropTypes.oneOf(ArrayTextAlign),
  textAlignSm: PropTypes.oneOf(ArrayTextAlign),
  textAlignMd: PropTypes.oneOf(ArrayTextAlign),
  textAlignLg: PropTypes.oneOf(ArrayTextAlign),
  textAlignXl: PropTypes.oneOf(ArrayTextAlign),
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetXs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetSm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetMd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetLg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  offsetXl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  orderXs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  orderSm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  orderMd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  orderLg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  orderXl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Col;
