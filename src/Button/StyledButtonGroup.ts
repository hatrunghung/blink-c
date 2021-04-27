import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Button.buttonGroup';

export const StyledButtonGroup = styled.div.attrs({
  'component-blink-id': COMPONENT_ID,
})`
  display: 'inline-flex';
  position: relative;
  z-index: 0;
  direction: ${props => (props.theme.rtl ? 'rtl' : 'ltr')};
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledButtonGroup.defaultProps = {
  theme: DEFAULT_THEME,
};
