import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Notification.description';

export interface IStyledNotificationDescriptionProps {
  type: 'info' | 'warning' | 'danger' | 'success';
}

function getColorStyles(
  props: IStyledNotificationDescriptionProps & ThemeProps<DefaultTheme>,
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

  const descriptionColorValue = getColors(hueColor, 800, props.theme);

  return css`
    color: ${descriptionColorValue};
  `;
}

export const StyledNotificationDescription = styled.p.attrs<IStyledNotificationDescriptionProps>(
  {
    'data-blink-id': COMPONENT_ID,
  },
)<IStyledNotificationDescriptionProps>`
  font-size: ${props => props.theme.fontSizes.xxs};

  ${props => getColorStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledNotificationDescription.defaultProps = {
  theme: DEFAULT_THEME,
  type: 'info',
};
