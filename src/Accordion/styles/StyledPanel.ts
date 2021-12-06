import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import {
  getColors,
  getComponentStyles,
  getLineHeight,
} from '../../theme/utils';

const COMPONENT_ID = 'Accordion.panel';

export interface IStyledPanelProps {
  isAnimated?: boolean;
  borderless?: boolean;
  isExpanded?: boolean;
}

// set css styles for border
function getBorderStyles(props: IStyledPanelProps & ThemeProps<DefaultTheme>) {
  const borderWidths = props.theme.borderWidths.sm;
  const borderStyles = props.theme.borderStyles.solid;
  let borderColors;

  if (props.borderless) {
    borderColors = 'transparent';
  } else {
    borderColors = getColors('neutral', 300, props.theme);
  }

  return css`
    border-bottom: ${`${borderWidths} ${borderStyles} ${borderColors}`};
  `;
}

function getColorStyles(props: IStyledPanelProps & ThemeProps<DefaultTheme>) {
  const backgroundColorValue = props.theme.colors.light_background;
  const textColorValue = props.theme.colors.dark_background;

  return css`
    background-color: ${backgroundColorValue};
    color: ${textColorValue};
  `;
}

export const StyledPanel = styled.div.attrs<IStyledPanelProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledPanelProps>`
  height: ${props => (props.isExpanded ? 'auto' : '0px')};
  overflow: hidden;
  line-height: ${props =>
    getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.xs};
  transition-property: height;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;

  ${props => getColorStyles(props)};
  ${props => getBorderStyles(props)};
  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledPanel.defaultProps = {
  theme: DEFAULT_THEME,
};
