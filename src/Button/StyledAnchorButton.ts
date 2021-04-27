import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { StyledButton } from './StyledButton';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Button.anchorButton';

export const StyledAnchorButton = styled(StyledButton).attrs(props => ({
  'component-blink-id': COMPONENT_ID,
  as: 'a',
  dir: props.theme.rtl ? 'right' : undefined,
  isLink: true,
  type: undefined,
}))`
  direction: ${props => props.theme.rtl && 'right'};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledAnchorButton.defaultProps = {
  theme: DEFAULT_THEME,
};
