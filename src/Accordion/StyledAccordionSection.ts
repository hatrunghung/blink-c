import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Accordion.accordion_section';

export interface IStyledAccordionSection {
  accordionType: 'basic' | 'borderless' | 'ghost';
  sectionIndex?: number;
  isDisabled?: boolean;
}

function getBorderBottomStyles(
  props: IStyledAccordionSection & ThemeProps<DefaultTheme>,
) {
  const borderColors = getColors('neutral', 300, props.theme);
  let borderBottomValue;

  if (props.accordionType === 'ghost') {
    borderBottomValue = 0;
  } else {
    borderBottomValue = `${props.theme.borderWidths.sm} ${props.theme.borderStyles.solid} ${borderColors}`;
  }

  return css`
    border-bottom: ${borderBottomValue};
  `;
}

export const StyledAccordionSection = styled.div.attrs<IStyledAccordionSection>(
  {
    'data-blink-id': COMPONENT_ID,
  },
)<IStyledAccordionSection>`
  ${props => getBorderBottomStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledAccordionSection.defaultProps = {
  theme: DEFAULT_THEME,
};
