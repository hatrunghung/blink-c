import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Radio.inner_radio';

export const StyledInnerRadio = styled.div.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.light_background};
  display: none;

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledInnerRadio.defaultProps = {
  theme: DEFAULT_THEME,
};
