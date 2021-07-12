import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';
import { SIZE, COLOR_TYPE, STATUS, DIRECTION } from './typesEnum';

const COMPONENT_ID = 'Stepper.icon';

export interface IStyledIcon {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'default';
  colorType?: 'primary' | 'basic';
  status?: 'finished' | 'processing' | 'waiting';
}

function getSizeStyles(props: IStyledIcon & ThemeProps<DefaultTheme>) {
  let widthValue;
  let heightValue;
  let fontSizeValue;
  let lineHeightValue;

  if (props.size === SIZE.DEFAULT) {
    widthValue = props.theme.space.lg;
    heightValue = props.theme.space.lg;
    fontSizeValue = props.theme.fontSizes.xs;
    lineHeightValue = props.theme.lineHeights.xxl;
  } else {
    widthValue = `${props.theme.space.base * 6}px`;
    heightValue = `${props.theme.space.base * 6}px`;
    fontSizeValue = props.theme.fontSizes.xxs;
    lineHeightValue = props.theme.lineHeights.lg;
  }

  return css`
    width: ${widthValue};
    height: ${heightValue};
    font-size: ${fontSizeValue};
    line-height: ${lineHeightValue};
  `;
}

function getMarginStyles(props: IStyledIcon & ThemeProps<DefaultTheme>) {
  const { base } = props.theme.space;
  let marginRightValue;

  if (props.direction === DIRECTION.HORIZONTAL) {
    if (props.size === SIZE.DEFAULT) {
      marginRightValue = `${base * 4}px`;
    } else {
      marginRightValue = `${base * 3}px`;
    }
  } else {
    if (props.size === SIZE.DEFAULT) {
      marginRightValue = `${base * 3}px`;
    } else {
      marginRightValue = `${base * 2}px`;
    }
  }

  return css`
    margin-right: ${marginRightValue};
  `;
}

// set background color and inner text color styles here
function getColorStyles(props: IStyledIcon & ThemeProps<DefaultTheme>) {
  const shade = 300;
  const primaryColor = getColors('primary', shade + 300, props.theme);
  const lightGrey = getColors('neutral', shade, props.theme);
  const regularGrey = getColors('neutral', shade + 100, props.theme);
  const mediumGrey = getColors('neutral', shade + 200, props.theme);
  const semiboldGrey = getColors('neutral', shade + 300, props.theme);
  const boldGrey = getColors('neutral', shade + 400, props.theme);
  const white = props.theme.colors.background;

  let borderColorValue;
  let backgroundColorValue;
  let colorValue;

  if (props.colorType === COLOR_TYPE.PRIMARY) {
    if (props.status === STATUS.FINISHED) {
      borderColorValue = primaryColor;
      backgroundColorValue = white;
      colorValue = primaryColor;
    } else if (props.status === STATUS.PROCESSING) {
      backgroundColorValue = primaryColor;
      colorValue = white;
    } else {
      backgroundColorValue = lightGrey;
      colorValue = mediumGrey;
    }
  } else {
    if (props.status === STATUS.FINISHED) {
      borderColorValue = lightGrey;
      backgroundColorValue = lightGrey;
      colorValue = boldGrey;
    } else if (props.status === STATUS.PROCESSING) {
      backgroundColorValue = semiboldGrey;
      colorValue = white;
    } else {
      backgroundColorValue = regularGrey;
      colorValue = boldGrey;
    }
  }

  return css`
    border: ${props => `${props.theme.borders.sm} ${borderColorValue}`};
    background-color: ${backgroundColorValue};
    color: ${colorValue};
  `;
}

export const StyledIcon = styled.div.attrs<IStyledIcon>({
  'component-blink-id': COMPONENT_ID,
})<IStyledIcon>`
  display: ${props =>
    props.direction === DIRECTION.HORIZONTAL && 'inline-block'};
  border-radius: 100%;
  vertical-align: ${props => props.direction === DIRECTION.HORIZONTAL && 'top'};
  text-align: center;
  float: ${props => props.direction === DIRECTION.VERTICAL && 'left'};
  box-sizing: border-box;

  ${props => getColorStyles(props)};
  ${props => getSizeStyles(props)};
  ${props => getMarginStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME,
};
