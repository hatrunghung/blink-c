import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles, getLineHeight } from '../theme/utils';

const COMPONENT_ID = 'Accordion.panel';

export interface IStyledPanelProps {
  accordionType?: 'basic' | 'borderless' | 'ghost';
  isExpanded?: boolean;
}

function getPaddingStyles(props: IStyledPanelProps & ThemeProps<DefaultTheme>) {
  const { base } = props.theme.space;
  let paddingHorizontal;
  let paddingVertical;

  if (props.accordionType === 'borderless') {
    // set padding for borderless accordion
    paddingVertical = base * 3;
    paddingHorizontal = base * 10;
  } else {
    // set padding for basic and ghost accordion
    paddingVertical = base * 4;
    paddingHorizontal = base * 4;
  }

  return css`
    padding: ${paddingVertical}px ${paddingHorizontal}px;
  `;
}

// set css styles for border
function getBorderStyles(props: IStyledPanelProps & ThemeProps<DefaultTheme>) {
  const borderWidths = props.theme.borderWidths.sm;
  const borderStyles = props.theme.borderStyles.solid;
  let borderColors;

  if (props.accordionType === 'basic') {
    borderColors = getColors('neutral', 300, props.theme);
  } else {
    borderColors = 'transparent';
  }

  return css`
    border: ${`${borderWidths} ${borderStyles} ${borderColors}`};
  `;
}

function getColorStyles(props: IStyledPanelProps & ThemeProps<DefaultTheme>) {
  const shade = 100;
  const backgroundColor = getColors('neutral', shade, props.theme);

  let colorValue;

  if (props.accordionType === 'borderless') {
    colorValue = backgroundColor;
  } else {
    colorValue = props.theme.colors.background;
  }

  return css`
    background-color: ${colorValue};
    color: #000;
  `;
}

export const StyledPanel = styled.div.attrs<IStyledPanelProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledPanelProps>`
  display: ${props => !props.isExpanded && 'none'};
  overflow: hidden;
  line-height: ${props =>
    getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  font-size: ${props => props.theme.fontSizes.xs};
  ${getPaddingStyles};

  ${props => getColorStyles(props)};
  ${props => getBorderStyles(props)};
  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledPanel.defaultProps = {
  theme: DEFAULT_THEME,
  accordionType: 'basic',
};
