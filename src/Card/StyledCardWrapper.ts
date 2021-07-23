import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Card.card_wrapper';

export const StyledCardWrapper = styled.div.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  margin: ${props => `${props.theme.space.base * 4}px`};
  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledCardWrapper.defaultProps = {
  theme: DEFAULT_THEME,
};
