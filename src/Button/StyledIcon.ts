import React from 'react';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';

export interface IStyledIconProps {
  isRotated: boolean;
  position?: 'start' | 'end';
}

const COMPONENT_ID = 'Button.icon';

function getSizeStyles(props: IStyledIconProps & ThemeProps<DefaultTheme>) {
  let marginProp;

  if (props.position === 'start') {
    marginProp = `margin-${props.theme.rtl ? 'left' : 'right'}`;
  } else if (props.position === 'end') {
    marginProp = `margin-${props.theme.rtl ? 'right' : 'left'}`;
  }

  return (
    marginProp &&
    css`
      ${marginProp}: ${props.theme.space.base * 2}px;
    `
  );
}

export const StyledIcon = styled(({ children, ...props }) =>
  React.cloneElement(React.Children.only(children), props),
).attrs({
  'component-blink-id': COMPONENT_ID,
})<IStyledIconProps>`
  transform: ${props =>
    props.isRotated ? `rotate(${props.theme.rtl ? '-' : '+'}180deg)` : 'none'};
  transition: transform 0.25s ease-in-out;

  ${props => getSizeStyles(props)}

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME,
};
