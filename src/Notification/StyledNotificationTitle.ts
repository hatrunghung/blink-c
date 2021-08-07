import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles, getLineHeight } from '../theme/utils';

const COMPONENT_ID = 'Notification.title';

export interface IStyledNotificationTitleProps {
  type: 'info' | 'warning' | 'danger' | 'success';
}

function getColorStyles(
  props: IStyledNotificationTitleProps & ThemeProps<DefaultTheme>,
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

  const titleColorValue = getColors(hueColor, 800, props.theme);

  return css`
    color: ${titleColorValue};
  `;
}

export const StyledNotificationTitle = styled.span.attrs<IStyledNotificationTitleProps>(
  {
    'data-blink-id': COMPONENT_ID,
  },
)<IStyledNotificationTitleProps>`
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props =>
    getLineHeight(props.theme.lineHeights.lg, props.theme.fontSizes.xs)};

  ${props => getColorStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledNotificationTitle.defaultProps = {
  theme: DEFAULT_THEME,
  type: 'info',
};
