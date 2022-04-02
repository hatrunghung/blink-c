import styled from 'styled-components';
import DEFAULT_THEME from '../../../theme';
import { getColors, getComponentStyles } from '../../../theme/utils';

const COMPONENT_ID = 'Typography.kbd';

export const StyledKbd = styled.kbd.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  border-style: ${props => props.theme.borderStyles.solid};
  border-width: ${props =>
    `${props.theme.borderWidths.sm} ${props.theme.borderWidths.sm} ${props.theme.borderWidths.md}`};
  border-radius: ${props => props.theme.borderRadius.md};
  border-color: ${props => getColors('neutral', 300, props.theme)};
  font-size: ${props => props.theme.fontSizes.xxs};
  font-family: ${props => props.theme.fonts.mono};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.md};
  background-color: ${props => getColors('neutral', 100, props.theme)};
  padding: ${props => `0 ${props.theme.space.xxs}`};
  whitespace: nowrap;

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledKbd.defaultProps = {
  theme: DEFAULT_THEME,
};
