import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getColors, getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Card.card';

function getBorderStyles(props: ThemeProps<DefaultTheme>) {
  const shade = 300;
  const borderColor = getColors('neutral', shade, props.theme);

  const borderStyles = props.theme.borders.sm(borderColor);

  return css`
    border: ${borderStyles};
  `;
}

export const StyledCard = styled.section.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.xl};

  ${props => getBorderStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledCard.defaultProps = {
  theme: DEFAULT_THEME,
};
