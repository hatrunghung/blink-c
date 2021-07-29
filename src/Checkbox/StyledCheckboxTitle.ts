import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Checkbox.checkbox_title';

export const StyledCheckboxTitle = styled.div.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  margin-left: ${props => props.theme.space.xs};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckboxTitle.defaultProps = {
  theme: DEFAULT_THEME,
};
