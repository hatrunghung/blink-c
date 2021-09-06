import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Radio.outer_radio';

function getSizeStyles(props: ThemeProps<DefaultTheme>) {
  const widthValue = `${props.theme.space.base * 4}px`;
  const heightValue = `${props.theme.space.base * 4}px`;
  const marginValue = `${props.theme.space.xxs} ${props.theme.space.xs}`;

  return css`
    width: ${widthValue};
    height: ${heightValue};
    margin: ${marginValue};
  `;
}

function getBorderStyles(props: ThemeProps<DefaultTheme>) {
  const borderColorValue = getColors('neutral', 300, props.theme);
  return css`
    border: ${props.theme.borders.sm(borderColorValue)};
  `;
}

function getHoverStyles(props: ThemeProps<DefaultTheme>) {
  const hoverColorValue = getColors('primary', 600, props.theme, 0.08);

  return css`
    &:hover {
      background-color: ${hoverColorValue};
    }
  `;
}

export const StyledOuterRadio = styled.div.attrs({
  'data-blink-id': COMPONENT_ID,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: 50%;

  ${props => getSizeStyles(props)};

  ${props => getBorderStyles(props)};

  ${props => getHoverStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledOuterRadio.defaultProps = {
  theme: DEFAULT_THEME,
};
