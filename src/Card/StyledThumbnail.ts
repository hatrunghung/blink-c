import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Card.thumbnail';

export const StyledThumbnail = styled.img.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  margin: ${props => `0 0 ${props.theme.space.sm} ${props.theme.space.sm}`};
  width: 30%;
  height: 30%;
  float: right;
  object-fit: cover;

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledThumbnail.defaultProps = {
  theme: DEFAULT_THEME,
};
