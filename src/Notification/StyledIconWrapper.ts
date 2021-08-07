import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Notification_icon';

export interface IStyledIconWrapperProps {
  type: 'info' | 'warning' | 'danger' | 'success';
}

function getColorStyles(
  props: IStyledIconWrapperProps & ThemeProps<DefaultTheme>,
) {
  let hueColor;

  if (props.type === 'warning') {
    hueColor = 'warning';
  } else if (props.type === 'danger') {
    hueColor = 'danger';
  } else if (props.type === 'success') {
    hueColor = 'success';
  } else {
    hueColor = 'neutral';
  }

  const iconColorValue = getColors(hueColor, 600, props.theme);

  return css`
    color: ${iconColorValue};
  `;
}

export const StyledIconWrapper = styled.div.attrs<IStyledIconWrapperProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledIconWrapperProps>`
  position: absolute;
  left: ${props => `${props.theme.space.base * 4}px`};
  margin-top: ${props => props.theme.space.xxs};

  ${props => getColorStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledIconWrapper.defaultProps = {
  theme: DEFAULT_THEME,
  type: 'info',
};
