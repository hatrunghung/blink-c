import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Accordion.inner_panel';

export interface IStyledInnerPanelProps {
  accordionSize?: 'small' | 'normal';
  isExpanded?: boolean;
}

function getaccordionSizeStyles(
  props: IStyledInnerPanelProps & ThemeProps<DefaultTheme>,
) {
  const { base } = props.theme.space;

  let topPaddingValue;
  let horizontalValue;
  let bottomPaddingValue;

  if (props.accordionSize === 'small') {
    topPaddingValue = `${base * 2}px`;
    horizontalValue = `${base * 4}px`;
    bottomPaddingValue = `${base * 4}px`;
  } else {
    topPaddingValue = `${base * 2}px`;
    horizontalValue = `${base * 6}px`;
    bottomPaddingValue = `${base * 6}px`;
  }

  return css`
    padding: ${topPaddingValue} ${horizontalValue} ${bottomPaddingValue};
  `;
}

export const StyledInnerPanel = styled.div.attrs<IStyledInnerPanelProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledInnerPanelProps>`
  opacity: ${props => (props.isExpanded ? '1' : '0')};
  visibility: ${props => (props.isExpanded ? 'visible' : 'hidden')};
  box-sizing: border-box;
  transition-property: opacity, visibility;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;

  ${props => getaccordionSizeStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledInnerPanel.defaultProps = {
  theme: DEFAULT_THEME,
  accordionSize: 'normal',
};
