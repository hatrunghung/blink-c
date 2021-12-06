import styled from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles } from '../../theme/utils';
import { StyledPanel } from './StyledPanel';

const COMPONENT_ID = 'Accordion.accordion_section';

export interface IStyledAccordionSection {
  sectionIndex?: number;
  isDisabled?: boolean;
}

export const StyledAccordionSection = styled.div.attrs<IStyledAccordionSection>(
  {
    'data-blink-id': COMPONENT_ID,
  },
)<IStyledAccordionSection>`
  &:last-child ${StyledPanel} {
    border-bottom: none;
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledAccordionSection.defaultProps = {
  theme: DEFAULT_THEME,
};
