import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import DEFAULT_THEME from '../../theme';
import { getColors, getComponentStyles } from '../../theme/utils';
import {
  ALIGN_SELF,
  BREAKPOINT,
  FLEX_NUMBER,
  SPACE,
  TEXT_ALIGN,
} from '../types';

const COMPONENT_ID = 'Flex.col';

export interface IStyledColProps extends ThemeProps<DefaultTheme> {
  columns?: FLEX_NUMBER;
  gutters?: SPACE;
  size?: FLEX_NUMBER;
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
  offset?: FLEX_NUMBER;
  offsetXs?: FLEX_NUMBER;
  offsetSm?: FLEX_NUMBER;
  offsetMd?: FLEX_NUMBER;
  offsetLg?: FLEX_NUMBER;
  offsetXl?: FLEX_NUMBER;
  order?: FLEX_NUMBER;
  orderXs?: FLEX_NUMBER;
  orderSm?: FLEX_NUMBER;
  orderMd?: FLEX_NUMBER;
  orderLg?: FLEX_NUMBER;
  orderXl?: FLEX_NUMBER;
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
  size: BREAKPOINT | undefined,
  alignSelf: ALIGN_SELF | undefined,
  textAlign: TEXT_ALIGN | undefined,
  offset: FLEX_NUMBER | undefined,
  order: FLEX_NUMBER | undefined,
  props: IStyledColProps,
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
  minWidth: string,
  responsiveSize: BREAKPOINT | undefined,
  responsiveAlignSelf: ALIGN_SELF | undefined,
  responsiveTextAlign: TEXT_ALIGN | undefined,
  responsiveOffset: FLEX_NUMBER | undefined,
  responsiveOrder: FLEX_NUMBER | undefined,
  props: IStyledColProps,
) {
  return css`
    @media (min-width: ${minWidth}) {
      ${getFlexStyles(
        responsiveSize,
        responsiveAlignSelf,
        responsiveTextAlign,
        responsiveOffset,
        responsiveOrder,
        props,
      )};
    }
  `;
}

export const StyledCol = styled.div.attrs<IStyledColProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledColProps>`
  box-sizing: border-box;

  ${props => props.debug && getColorStyles(props)};

  ${props => getSizeStyles(props)};

  ${props =>
    getFlexStyles(
      !props.size && (props.xs || props.sm || props.md || props.lg || props.xl)
        ? undefined
        : props.size || false,
      props.alignSelf,
      props.textAlign,
      props.offset,
      props.order,
      props,
    )}

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.xs,
      props.xs,
      props.alignSelfXs,
      props.textAlignXs,
      props.offsetXs,
      props.orderXs,
      props,
    )};

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.sm,
      props.sm,
      props.alignSelfSm,
      props.textAlignSm,
      props.offsetSm,
      props.orderSm,
      props,
    )};

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.md,
      props.md,
      props.alignSelfMd,
      props.textAlignMd,
      props.offsetMd,
      props.orderMd,
      props,
    )};

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.lg,
      props.lg,
      props.alignSelfLg,
      props.textAlignLg,
      props.offsetLg,
      props.orderLg,
      props,
    )};

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.xl,
      props.xl,
      props.alignSelfXl,
      props.textAlignXl,
      props.offsetXl,
      props.orderXl,
      props,
    )};

  ${props => getComponentStyles(COMPONENT_ID, props)}
`;

StyledCol.defaultProps = {
  theme: DEFAULT_THEME,
  columns: 24,
};
