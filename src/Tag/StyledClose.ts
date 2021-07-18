import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Tag.close';

export const StyledClose = styled.div.attrs<unknown>({
  'component-blink-id': COMPONENT_ID,
  'aria-label': 'Press delete to remove',
})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledClose.defaultProps = {
  theme: DEFAULT_THEME,
};
