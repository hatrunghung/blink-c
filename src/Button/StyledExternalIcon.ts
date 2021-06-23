import styled from 'styled-components';
import { External16 } from 'blinkicon';
import { getComponentStyles } from '../theme/utils';
import DEFAULT_THEME from '../theme';

const COMPONENT_ID = 'Button.external_icon';

export const StyledExternalIcon = styled(External16).attrs({
  'component-blink-id': COMPONENT_ID,
})`
  transform: ${props => props.theme.rtl && 'scaleX(-1)'};
  margin-bottom: -0.085em;
  margin-left: 0.25em;
  box-sizing: border-box;

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledExternalIcon.defaultProps = {
  theme: DEFAULT_THEME,
};
