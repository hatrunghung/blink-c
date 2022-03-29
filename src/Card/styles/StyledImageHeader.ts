import styled from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Card.image_header';

export const StyledImageHeader = styled.img.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  width: 100%;
  object-fit: contain;
  border-top-left-radius: ${props => props.theme.borderRadius.xl};
  border-top-right-radius: ${props => props.theme.borderRadius.xl};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledImageHeader.defaultProps = {
  theme: DEFAULT_THEME,
};
