import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';
import { PresetColor, StatusColor } from './colorTypes';
import { StyledTagIcon } from './StyledTagIcon';
import { StyledClose } from './StyledClose';

const COMPONENT_ID = 'Tag.tag';

export interface IStyledTagProps {
  color?: 'basic' | StatusColor | PresetColor | string;
}

function getColorStyles(props: IStyledTagProps & ThemeProps<DefaultTheme>) {
  let backgroundColorValue;
  let textColorValue;
  let borderColorValue;
  const borderShade = 400;
  const backgroundShade = 100;
  const textShade = 600;

  if (props.color.includes('#')) {
    backgroundColorValue = props.color;
    textColorValue = 'white';
    borderColorValue = 'transparent';
  } else if (props.color === 'basic') {
    backgroundColorValue = getColors('neutral', backgroundShade, props.theme);
    textColorValue = getColors('neutral', textShade, props.theme);
    borderColorValue = getColors('neutral', borderShade, props.theme);
  } else {
    backgroundColorValue = getColors(props.color, backgroundShade, props.theme);
    textColorValue = getColors(props.color, textShade, props.theme);
    borderColorValue = getColors(props.color, borderShade, props.theme);
  }

  return css`
    background-color: ${backgroundColorValue};
    color: ${textColorValue};
    border-color: ${borderColorValue};
  `;
}

export const StyledTag = styled.div.attrs<IStyledTagProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledTagProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.borderRadius.sm};
  cursor: default;
  height: ${props => props.theme.lineHeights.md};
  line-height: 1;
  font-size: ${props => props.theme.fontSizes.xxs};
  overflow: hidden;
  margin: ${props => props.theme.space.sm};
  padding: ${props => `0 ${props.theme.space.xs}`};
  border-width: 1px;
  border-style: solid;

  ${StyledTagIcon} {
    margin: ${props => `0 ${props.theme.space.xxs} 0 0`};
  }

  ${StyledClose} {
    margin: ${props => `0 0 0 ${props.theme.space.xxs}`};
  }

  ${props => getColorStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledTag.defaultProps = {
  theme: DEFAULT_THEME,
  color: 'basic',
};
