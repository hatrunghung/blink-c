import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';
import { SPACE } from './types';

const COMPONENT_ID = 'Grid.grid';

export interface IStyledGridProps extends ThemeProps<DefaultTheme> {
  gutters?: SPACE;
  debug?: boolean;
}

function getColorStyles(props: IStyledGridProps & ThemeProps<DefaultTheme>) {
  const borderColor = getColors(
    props.theme.palette.volcano,
    400,
    props.theme,
    0.5,
  );
  const borderWidth = props.theme.borderWidths.sm;

  return css`
    box-shadow: -${borderWidth} 0 0 0 ${borderColor},
      ${borderWidth} 0 0 0 ${borderColor};
  `;
}

function getSizeStyles(props: IStyledGridProps) {
  const padding = props.gutters
    ? math(`${props.theme.space[props.gutters]} / 2`)
    : 0;

  return css`
    padding-left: ${padding};
    padding-right: ${padding};
  `;
}

export const StyledGrid = styled.div.attrs<IStyledGridProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledGridProps>`
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;

  ${props => props.debug && getColorStyles(props)};

  ${props => getSizeStyles(props)}

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledGrid.defaultProps = {
  theme: DEFAULT_THEME,
  gutters: 'md',
};
