import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';
import { SIZE, DIRECTION, COLOR_TYPE, STATUS } from './typesEnum';

const COMPONENT_ID = 'Stepper.step_title';

export interface IStyledTitleProps {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'default';
  colorType?: 'primary' | 'basic';
  status?: 'finished' | 'processing' | 'waiting';
}

function getColorStyles(props: IStyledTitleProps & ThemeProps<DefaultTheme>) {
  const primaryTitleColor = getColors('neutral', 700, props.theme);
  const secondaryTitleColor = getColors('neutral', 500, props.theme);

  let colorValue;

  if (props.colorType === COLOR_TYPE.PRIMARY) {
    if (
      props.status === STATUS.FINISHED ||
      props.status === STATUS.PROCESSING
    ) {
      colorValue = primaryTitleColor;
    } else {
      colorValue = secondaryTitleColor;
    }
  } else {
    if (props.status === STATUS.PROCESSING) {
      colorValue = primaryTitleColor;
    } else {
      colorValue = secondaryTitleColor;
    }
  }

  return css`
    color: ${colorValue};
  `;
}

function getSizeStyles(props: IStyledTitleProps & ThemeProps<DefaultTheme>) {
  let fontSizeValue;
  let lineHeightValue;
  let paddingRightValue;

  if (props.size === SIZE.DEFAULT) {
    fontSizeValue = props.theme.fontSizes.xs;
    lineHeightValue = props.theme.lineHeights.xxl;
    paddingRightValue = `${props.theme.space.base * 4}px`;
  } else {
    fontSizeValue = props.theme.fontSizes.xxs;
    lineHeightValue = props.theme.lineHeights.lg;
    paddingRightValue = `${props.theme.space.base * 3}px`;
  }

  return css`
    font-size: ${fontSizeValue};
    line-height: ${lineHeightValue};
    padding-right: ${paddingRightValue};
  `;
}

export const StyledTitle = styled.div.attrs<IStyledTitleProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledTitleProps>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;

  ${props => getSizeStyles(props)};
  ${props => getColorStyles(props)};

  &:after {
    display: ${props =>
      props.direction === DIRECTION.VERTICAL ? 'none' : 'block'};
    position: absolute;
    content: '';
    top: ${props => (props.size === SIZE.DEFAULT ? '16px' : '12px')};
    left: 100%;
    width: 1000px;
    height: 1px;
    background-color: ${props =>
      props.status === STATUS.FINISHED && props.colorType === COLOR_TYPE.PRIMARY
        ? getColors('primary', 600, props.theme)
        : getColors('neutral', 300, props.theme)};
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledTitle.defaultProps = {
  theme: DEFAULT_THEME,
  size: 'default',
};
