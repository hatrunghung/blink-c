import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Radio.radio_container';

export const StyledRadioContainer = styled.label.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: ${props => `${props.theme.space.xs} ${props.theme.space.sm}`};
  font-size: ${props => props.theme.fontSizes.xxs};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledRadioContainer.defaultProps = {
  theme: DEFAULT_THEME,
};
