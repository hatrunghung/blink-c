import styled from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Checkbox.checkbox_container';

export const StyledCheckboxContainer = styled.label.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckboxContainer.defaultProps = {
  theme: DEFAULT_THEME,
};
