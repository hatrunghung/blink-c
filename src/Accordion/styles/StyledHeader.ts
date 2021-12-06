import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getColors, getComponentStyles } from '../../theme/utils/';

const COMPONENT_ID = 'Accordion.header';

export interface IStyledHeaderProps {
  isFocused?: boolean;
  isDisabled?: boolean;
  isExpanded?: boolean;
  accordionSize?: 'small' | 'normal';
}

function getPaddingStyles(
  props: IStyledHeaderProps & ThemeProps<DefaultTheme>,
) {
  const { base } = props.theme.space;

  let horizontalPaddingValue;
  let verticalPaddingValue;

  if (props.accordionSize === 'small') {
    horizontalPaddingValue = `${base * 2}px`;
    verticalPaddingValue = `${base * 4}px`;
  } else {
    horizontalPaddingValue = `${base * 3}px`;
    verticalPaddingValue = `${base * 5}px`;
  }

  return css`
    padding: ${horizontalPaddingValue} ${verticalPaddingValue};
  `;
}

function getColorStyles(props: IStyledHeaderProps & ThemeProps<DefaultTheme>) {
  const shade = 100;
  const backgroundHoverColor = getColors('neutral', shade, props.theme);
  const disabledBackgroundColor = getColors(
    'neutral',
    shade + 100,
    props.theme,
  );
  const disabledForegroundColor = getColors(
    'neutral',
    shade + 300,
    props.theme,
  );

  return css`
    background-color: ${props.isDisabled
      ? disabledBackgroundColor
      : 'transparent'};
    color: ${props.isDisabled
      ? disabledForegroundColor
      : props.theme.colors.dark_background};

    &:hover {
      background-color: ${!props.isDisabled && backgroundHoverColor};
    }
  `;
}

export const StyledHeader = styled.div.attrs<IStyledHeaderProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledHeaderProps>`
  display: flex;
  align-items: center;
  box-shadow: ${props =>
    props.isFocused &&
    `${props.theme.shadows.md(
      getColors('primary', 600, props.theme, 0.35) as string,
    )} inset`};

  ${props => getPaddingStyles(props)};
  ${props => getColorStyles(props)};

  &:hover {
    cursor: ${props => !props.isExpanded && 'pointer'};
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME,
  accordionSize: 'normal',
};
