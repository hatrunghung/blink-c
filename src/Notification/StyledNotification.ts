import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Notification.notification';

export interface IStyledNotificationProps {
  type: 'info' | 'warning' | 'danger' | 'success';
  isAlert?: boolean;
}

function boxShadowStyles(
  props: IStyledNotificationProps & ThemeProps<DefaultTheme>,
) {
  const verticalOffset = props.theme.space.md;
  const blurRadius = `${props.theme.space.base * 7}px`;
  const boxShadowColor = getColors('pink', 800, props.theme, 0.2);

  const boxShadowValue = props.theme.shadows.lg(
    verticalOffset,
    blurRadius,
    boxShadowColor,
  );

  return css`
    box-shadow: ${boxShadowValue};
  `;
}

function getColorStyles(
  props: IStyledNotificationProps & ThemeProps<DefaultTheme>,
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

  const backgroundColorValue = props.isAlert
    ? getColors(hueColor, 100, props.theme)
    : 'transparent';

  return css`
    background-color: ${backgroundColorValue};
  `;
}

function getBorderStyles(
  props: IStyledNotificationProps & ThemeProps<DefaultTheme>,
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

  const borderColorValue = getColors(hueColor, 300, props.theme);
  const borderValue = props.theme.borders.sm(borderColorValue);

  return css`
    border: ${borderValue};
  `;
}

export const StyledNotification = styled.div.attrs<IStyledNotificationProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledNotificationProps>`
  position: relative;
  padding: ${props => `${props.theme.space.sm} ${props.theme.space.xl}`};
  border-radius: ${props => props.theme.borderRadius.md};

  ${props => !props.isAlert && boxShadowStyles(props)};

  ${props => getColorStyles(props)};

  ${props => getBorderStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledNotification.defaultProps = {
  theme: DEFAULT_THEME,
  type: 'info',
};
