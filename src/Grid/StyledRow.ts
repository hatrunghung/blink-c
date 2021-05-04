import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { ALIGN_ITEMS, DIRECTION, JUSTIFY_CONTENT, SPACE, WRAP } from './types';
import { getColors, getComponentStyles } from '../theme/utils';
import DEFAULT_THEME from '../theme';

const COMPONENT_ID = 'Grid.row';

export interface IStyledRowProps extends ThemeProps<DefaultTheme> {
  gutters?: SPACE;
  flexDirection?: DIRECTION;
  justifyContent?: JUSTIFY_CONTENT;
  justifyContentXs?: JUSTIFY_CONTENT;
  justifyContentSm?: JUSTIFY_CONTENT;
  justifyContentMd?: JUSTIFY_CONTENT;
  justifyContentLg?: JUSTIFY_CONTENT;
  justifyContentXl?: JUSTIFY_CONTENT;
  alignItems?: ALIGN_ITEMS;
  alignItemsXs?: ALIGN_ITEMS;
  alignItemsSm?: ALIGN_ITEMS;
  alignItemsMd?: ALIGN_ITEMS;
  alignItemsLg?: ALIGN_ITEMS;
  alignItemsXl?: ALIGN_ITEMS;
  wrap?: WRAP;
  wrapXs?: WRAP;
  wrapSm?: WRAP;
  wrapMd?: WRAP;
  wrapLg?: WRAP;
  wrapXl?: WRAP;
  debug?: boolean;
}

function getColorStyles(props: IStyledRowProps & ThemeProps<DefaultTheme>) {
  const borderColor = getColors(
    props.theme.palette.jisoo,
    300,
    props.theme,
    0.5,
  );
  const borderWidth = props.theme.borderWidths.sm;

  return css`
    box-shadow: inset 0 ${borderWidth} 0 0 ${borderColor},
      inset 0 -${borderWidth} 0 0 ${borderColor};
  `;
}

function getSizeStyles(props: IStyledRowProps) {
  const margin = props.gutters
    ? math(`${props.theme.space[props.gutters]} / 2`)
    : 0;

  return css`
    margin-left: -${margin};
    margin-right: -${margin};
  `;
}

function getFlexStyles(
  justifyContent?: JUSTIFY_CONTENT,
  alignItems?: ALIGN_ITEMS,
  wrap?: WRAP,
) {
  let justifyContentValue;
  let alignItemsValue;

  // handle justify-content value for flex-container
  if (justifyContent === 'start' || justifyContent === 'end') {
    justifyContentValue = `flex-${justifyContent}`;
  } else if (
    justifyContent === 'between' ||
    justifyContent === 'around' ||
    justifyContent === 'evenly'
  ) {
    justifyContentValue = `space-${justifyContent}`;
  } else {
    justifyContentValue = justifyContent;
  }

  // handle align-items value for flex-container
  if (alignItems === 'start' || alignItems === 'end') {
    alignItemsValue = `flex-${alignItems}`;
  } else {
    alignItemsValue = alignItems;
  }

  return css`
    justify-content: ${justifyContentValue};
    align-items: ${alignItemsValue};
    flex-wrap: ${wrap};
  `;
}

function getResponsiveStyles(
  minWidth: string,
  responsiveJustifyContent: JUSTIFY_CONTENT,
  responsiveAlignItems: ALIGN_ITEMS,
  responsiveWrap: WRAP,
) {
  return css`
    @media (min-width: ${minWidth}) {
      ${getFlexStyles(
        responsiveJustifyContent,
        responsiveAlignItems,
        responsiveWrap,
      )}
    }
  `;
}

export const StyledRow = styled.div.attrs<IStyledRowProps>({
  'component-blink-id': COMPONENT_ID,
})<IStyledRowProps>`
  display: flex;
  box-sizing: border-box;

  ${props => props.debug && getColorStyles(props)};
  ${props => getSizeStyles(props)};
  ${props => getFlexStyles(props.justifyContent, props.alignItems, props.wrap)};

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.xs,
      props.justifyContentXs,
      props.alignItemsXs,
      props.wrapXs,
    )};

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.sm,
      props.justifyContentSm,
      props.alignItemsSm,
      props.wrapSm,
    )};

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.md,
      props.justifyContentMd,
      props.alignItemsMd,
      props.wrapMd,
    )};

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.lg,
      props.justifyContentLg,
      props.alignItemsLg,
      props.wrapLg,
    )};

  ${props =>
    getResponsiveStyles(
      props.theme.breakpoints.xl,
      props.justifyContentXl,
      props.alignItemsXl,
      props.wrapXl,
    )};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledRow.defaultProps = {
  theme: DEFAULT_THEME,
  wrap: 'wrap',
};
