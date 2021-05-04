import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';
import {
  ALIGN_SELF,
  BREAKPOINT,
  GRID_NUMBER,
  SPACE,
  TEXT_ALIGN,
} from './types';

const COMPONENT_ID = 'Grid.col';

export interface IStyledColProps extends ThemeProps<DefaultTheme> {
  columns?: GRID_NUMBER;
  gutters?: SPACE;
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
  debug?: boolean;
}

function getColorStyles(props: IStyledColProps) {
  const backgroundColor = getColors(
    props.theme.palette.azure,
    300,
    props.theme,
    0.5,
  );

  return css`
    background-clip: content-box;
    background-color: ${backgroundColor};
  `;
}

function getSizeStyles(props: IStyledColProps) {
  const padding = props.gutters
    ? math(`${props.theme.space[props.gutters]} / 2`)
    : 0;

  return css`
    padding-left: ${padding};
    padding-right: ${padding};
  `;
}

function getFlexStyles(
  props: IStyledColProps,
  size?: BREAKPOINT,
  alignSelf?: ALIGN_SELF,
  textAlign?: TEXT_ALIGN,
  offset?: GRID_NUMBER,
  order?: GRID_NUMBER,
) {
  const margin = offset && `${math(`${offset} / ${props.columns} * 100`)}%`;
  let flexBasis;
  let flexGrow;
  let flexOrder;
  let flexAlignSelf;
  let horizontalAlign;

  if (typeof size === 'boolean') {
    flexBasis = 0;
    flexGrow = 1;
  } else if (size === 'auto') {
    flexBasis = 'auto';
    flexGrow = 0;
  } else if (size !== undefined) {
    flexBasis = `${math(`${size} / ${props.columns} * 100`)}%`;
    flexGrow = 0;
  }

  if (alignSelf === 'start' || alignSelf === 'end') {
    flexAlignSelf = `flex-${alignSelf}`;
  } else {
    flexAlignSelf = alignSelf;
  }

  if (textAlign === 'left') {
    horizontalAlign = props.theme.rtl ? 'right' : 'left';
  } else if (textAlign === 'right') {
    horizontalAlign = props.theme.rtl ? 'left' : 'right';
  } else {
    horizontalAlign = textAlign;
  }

  if (order === 'first') {
    flexOrder = -1;
  } else if (order === 'last') {
    flexOrder = math(`${props.columns} + 1`);
  } else {
    flexOrder = order;
  }

  return css`
    flex-basis: ${flexBasis};
    flex-grow: ${flexGrow};
    flex-shrink: ${size && 0};
    align-self: ${flexAlignSelf};
    order: ${flexOrder};
    text-align: ${horizontalAlign};
    margin-${props.theme.rtl ? 'right' : 'left'}: ${margin};
  `;
}

function getResponsiveStyles(
  props: IStyledColProps,
  minWidth: string,
  responsiveSize?: BREAKPOINT,
  responsiveAlignSelf?: ALIGN_SELF,
  responsiveTextAlign?: TEXT_ALIGN,
  responsiveOffset?: GRID_NUMBER,
  responsiveOrder?: GRID_NUMBER,
) {
  return css`
    @media (min-width: ${minWidth}) {
      ${getFlexStyles(
        props,
        responsiveSize,
        responsiveAlignSelf,
        responsiveTextAlign,
        responsiveOffset,
        responsiveOrder,
      )};
    }
  `;
}

export const StyledCol = styled.div.attrs<IStyledColProps>({
  'component-blink-id': COMPONENT_ID,
})<IStyledColProps>`
  box-sizing: border-box;

  ${props => props.debug && getColorStyles(props)};

  ${props => getSizeStyles(props)};

  ${props =>
    getFlexStyles(
      props,
      !props.size && (props.xs || props.sm || props.md || props.lg || props.xl)
        ? undefined
        : props.size || false,
      props.alignSelf,
      props.textAlign,
      props.offset,
      props.order,
    )}

  ${props =>
    getResponsiveStyles(
      props,
      props.theme.breakpoints.xs,
      props.xs,
      props.alignSelfXs,
      props.textAlignXs,
      props.offsetXs,
      props.orderXs,
    )};

  ${props =>
    getResponsiveStyles(
      props,
      props.theme.breakpoints.sm,
      props.sm,
      props.alignSelfSm,
      props.textAlignSm,
      props.offsetSm,
      props.orderSm,
    )};

  ${props =>
    getResponsiveStyles(
      props,
      props.theme.breakpoints.md,
      props.md,
      props.alignSelfMd,
      props.textAlignMd,
      props.offsetMd,
      props.orderMd,
    )};

  ${props =>
    getResponsiveStyles(
      props,
      props.theme.breakpoints.lg,
      props.lg,
      props.alignSelfLg,
      props.textAlignLg,
      props.offsetLg,
      props.orderLg,
    )};

  ${props =>
    getResponsiveStyles(
      props,
      props.theme.breakpoints.xl,
      props.xl,
      props.alignSelfXl,
      props.textAlignXl,
      props.offsetXl,
      props.orderXl,
    )};

  ${props => getComponentStyles(COMPONENT_ID, props)}
`;

StyledCol.defaultProps = {
  theme: DEFAULT_THEME,
  columns: 24,
};
