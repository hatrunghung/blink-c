import { Children, cloneElement } from 'react';
import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getColors, getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Accordion.rotate_icon';

function getColorStyles(props: ThemeProps<DefaultTheme> & any) {
  const color = getColors('neutral', 600, props.theme);

  return css`
    color: ${color};
  `;
}

export const StyledRotateIcon = styled(({ children, ...props }) =>
  cloneElement(Children.only(children), props),
).attrs({
  'data-blink-id': COMPONENT_ID,
})`
  transform: ${props =>
    !props.isRotated && `rotate(${props.theme.rtl ? '+' : '-'}90deg)`};
  transition: transform 200ms ease-in-out;
  box-sizing: content-box;
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};
  vertical-align: middle;

  ${props => getColorStyles(props)}

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledRotateIcon.defaultProps = {
  theme: DEFAULT_THEME,
};
