import styled from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Card.card_content';

export const StyledCardContent = styled.div.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props => props.theme.lineHeights.lg};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledCardContent.defaultProps = {
  theme: DEFAULT_THEME,
};
