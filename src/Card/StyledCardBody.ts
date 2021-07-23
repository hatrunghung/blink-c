import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Card.card_body';

export const StyledCardBody = styled.div.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  margin: ${props => `0 0 ${props.theme.space.base * 4}px 0`};
  display: block;

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledCardBody.defaultProps = {
  theme: DEFAULT_THEME,
};
