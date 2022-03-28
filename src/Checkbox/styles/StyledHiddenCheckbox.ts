import styled from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Checkbox.hidden_checkbox';

/*
	This component is not to be visually displayed, but available for the screen-reader.
	Read more: https://polished.js.org/docs/#hidevisually
*/

export const StyledHiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
  'data-blink-id': COMPONENT_ID,
})`
  border: 0;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledHiddenCheckbox.defaultProps = {
  theme: DEFAULT_THEME,
};
