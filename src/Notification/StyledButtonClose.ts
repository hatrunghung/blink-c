import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { getColors, getComponentStyles } from '../theme/utils';
import DEFAULT_THEME from '../theme';

const COMPONENT_ID = 'Notification.close';

export interface IStyledNotificationCloseProps {
  notificationType: 'info' | 'warning' | 'danger' | 'success';
  isAlert?: boolean;
}

function getColorStyles(
  props: IStyledNotificationCloseProps & ThemeProps<DefaultTheme>,
) {
  let hueColor;

  if (props.notificationType === 'warning') {
    hueColor = 'warning';
  } else if (props.notificationType === 'danger') {
    hueColor = 'danger';
  } else if (props.notificationType === 'success') {
    hueColor = 'success';
  } else {
    hueColor = 'neutral';
  }

  const shade = 600;
  const buttonIconColor = getColors(hueColor, shade, props.theme);
  const buttonIconHoverColor = getColors(hueColor, shade + 200, props.theme);

  return css`
    color: ${buttonIconColor};
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${buttonIconHoverColor};
    }
  `;
}

export const StyledButtonClose = styled.button.attrs<IStyledNotificationCloseProps>(
  {
    'data-blink-id': COMPONENT_ID,
  },
)<IStyledNotificationCloseProps>`
  position: absolute;
  top: ${props => props.theme.space.sm};
  right: ${props => props.theme.space.sm};
  padding: 0;
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};
  border: none;
  background-color: transparent;
  cursor: pointer;

  ${props => getColorStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledButtonClose.defaultProps = {
  theme: DEFAULT_THEME,
  notificationType: 'info',
};
