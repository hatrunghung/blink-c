import React, { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import {
  ALIGN_ITEMS,
  ArrayAlignItems,
  ArrayDirection,
  ArrayJustifyContent,
  ArrayWrap,
  DIRECTION,
  JUSTIFY_CONTENT,
  WRAP,
} from './types';
import { useFlexContext } from '../contexts/FlexContext';
import { StyledRow } from './styles/StyledRow';

export interface IRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Applies the `flex-direction` flex container property to the Row.
   * This affects `Col` item direction on all screen sizes.
   */
  flexDirection?: DIRECTION;
  flexDirectionXs?: DIRECTION;
  flexDirectionSm?: DIRECTION;
  flexDirectionMd?: DIRECTION;
  flexDirectionLg?: DIRECTION;
  flexDirectionXl?: DIRECTION;
  /**
   * Applies the `justify-content` flex container property to the Row.
   * This affects `Col` horizontally alignment on all screen sizes.
   */
  justifyContent?: JUSTIFY_CONTENT;
  justifyContentXs?: JUSTIFY_CONTENT;
  justifyContentSm?: JUSTIFY_CONTENT;
  justifyContentMd?: JUSTIFY_CONTENT;
  justifyContentLg?: JUSTIFY_CONTENT;
  justifyContentXl?: JUSTIFY_CONTENT;
  /*
   *Applies the `align-items` flex container property to the Row.
   * This affects `Col` vertically alignment on all screen sizes.
   */
  alignItems?: ALIGN_ITEMS;
  alignItemsXs?: ALIGN_ITEMS;
  alignItemsSm?: ALIGN_ITEMS;
  alignItemsMd?: ALIGN_ITEMS;
  alignItemsLg?: ALIGN_ITEMS;
  alignItemsXl?: ALIGN_ITEMS;
  /**
   * Applies the `flex-wrap` container property to the Row.
   * This affects `Col` wrapping on all screen sizes.
   */
  wrap?: WRAP;
  wrapXs?: WRAP;
  wrapSm?: WRAP;
  wrapMd?: WRAP;
  wrapLg?: WRAP;
  wrapXl?: WRAP;
}

const Row = forwardRef<HTMLDivElement, IRowProps>((props, ref) => {
  const flexContext = useFlexContext();

  return (
    <StyledRow
      gutters={flexContext.gutters}
      ref={ref}
      wrap={props.wrap}
      debug={flexContext.debug}
      {...props}
    />
  );
});

Row.displayName = 'Row';

Row.propTypes = {
  flexDirection: PropTypes.oneOf(ArrayDirection),
  flexDirectionXs: PropTypes.oneOf(ArrayDirection),
  flexDirectionSm: PropTypes.oneOf(ArrayDirection),
  flexDirectionMd: PropTypes.oneOf(ArrayDirection),
  flexDirectionLg: PropTypes.oneOf(ArrayDirection),
  flexDirectionXl: PropTypes.oneOf(ArrayDirection),
  justifyContent: PropTypes.oneOf(ArrayJustifyContent),
  justifyContentXs: PropTypes.oneOf(ArrayJustifyContent),
  justifyContentSm: PropTypes.oneOf(ArrayJustifyContent),
  justifyContentMd: PropTypes.oneOf(ArrayJustifyContent),
  justifyContentLg: PropTypes.oneOf(ArrayJustifyContent),
  justifyContentXl: PropTypes.oneOf(ArrayJustifyContent),
  alignItems: PropTypes.oneOf(ArrayAlignItems),
  alignItemsXs: PropTypes.oneOf(ArrayAlignItems),
  alignItemsSm: PropTypes.oneOf(ArrayAlignItems),
  alignItemsMd: PropTypes.oneOf(ArrayAlignItems),
  alignItemsLg: PropTypes.oneOf(ArrayAlignItems),
  alignItemsXl: PropTypes.oneOf(ArrayAlignItems),
  wrap: PropTypes.oneOf(ArrayWrap),
  wrapXs: PropTypes.oneOf(ArrayWrap),
  wrapSm: PropTypes.oneOf(ArrayWrap),
  wrapMd: PropTypes.oneOf(ArrayWrap),
  wrapLg: PropTypes.oneOf(ArrayWrap),
  wrapXl: PropTypes.oneOf(ArrayWrap),
};

export default Row;
