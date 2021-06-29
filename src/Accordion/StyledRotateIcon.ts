import { Children, cloneElement } from 'react';
import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Accordion.rotate_icon';

function getColorStyles(props: ThemeProps<DefaultTheme> & any) {
  const color = getColors('neutral', 600, props.theme);

  return css`
    color: ${color};
  `;
}

export const StyledRotateIcon = styled(({ children, isExpanded, ...props }) =>
  cloneElement(Children.only(children), { isExpanded, ...props }),
).attrs({
  'component-blink-id': COMPONENT_ID,
})`
  transform: ${props =>
    props.isExpanded && `rotate(${props.theme.rtl ? '+' : '-'}90deg)`};
  transition: transform 0.25s ease-in-out, color 0.1s ease-in-out;
  box-sizing: content-box;
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};
  vertical-align: middle;

  ${getColorStyles}

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledRotateIcon.defaultProps = {
  theme: DEFAULT_THEME,
};
