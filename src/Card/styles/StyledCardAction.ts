import styled from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Card.card_action';

export const StyledCardAction = styled.div.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin: ${props => `0 ${props.theme.space.xs}`};
    max-width: 100%;
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledCardAction.defaultProps = {
  theme: DEFAULT_THEME,
};
