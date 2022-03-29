import styled from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Card.card_title';

export const StyledCardTitle = styled.h1.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  padding: 0;
  margin: ${props => `0 0 ${props.theme.space.sm} 0`};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledCardTitle.defaultProps = {
  theme: DEFAULT_THEME,
};
