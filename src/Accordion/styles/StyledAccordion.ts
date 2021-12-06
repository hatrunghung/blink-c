import styled from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Accordion.accordion';

export const StyledAccordion = styled.div.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledAccordion.defaultProps = {
  theme: DEFAULT_THEME,
};
