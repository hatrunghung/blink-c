import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils/';

const COMPONENT_ID = 'Accordion.header';

export interface IStyledHeaderProps {
  isFocused?: boolean;
  isDisabled?: boolean;
  isExpanded?: boolean;
  accordionType?: 'basic' | 'ghost' | 'borderless';
}

function getBorderStyles(props: IStyledHeaderProps & ThemeProps<DefaultTheme>) {
  const borderWidths = props.theme.borderWidths.sm;
  const borderStyles = props.theme.borderStyles.solid;
  const borderColors = getColors('neutral', 300, props.theme);
  const borderValue = `${borderWidths} ${borderStyles} ${borderColors}`;

  return css`
    border: ${borderValue};
  `;
}

function getColorStyles(props: IStyledHeaderProps & ThemeProps<DefaultTheme>) {
  let colorValue;
  const shade = 100;
  const backgroundColor = getColors('neutral', shade, props.theme);
  const backgroundHoverColor = getColors('neutral', shade + 200, props.theme);
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

  if (props.accordionType === 'ghost') {
    colorValue = props.theme.colors.background;
  } else {
    colorValue = backgroundColor;
  }

  return css`
    background-color: ${colorValue};
    color: '#000';

    &:hover {
      background-color: ${!props.isDisabled && backgroundHoverColor};
    }

    &:disabled {
      background-color: ${props.accordionType === 'ghost'
        ? props.theme.colors.background
        : disabledBackgroundColor};
      color: ${disabledForegroundColor};
      cursor: default;
    }
  `;
}

export const StyledHeader = styled.div.attrs<IStyledHeaderProps>({
  'component-blink-id': COMPONENT_ID,
})<IStyledHeaderProps>`
  display: flex;
  align-items: center;
  box-shadow: ${props =>
    props.isFocused &&
    `${props.theme.shadows.md(
      getColors('primary', 600, props.theme, 0.35) as string,
    )} inset`};
  padding: ${props =>
    `${props.theme.space.sm} ${props.theme.space.base * 4}px`};

  ${props =>
    props.accordionType === 'basic' ? getBorderStyles(props) : 'border: none'};

  ${props => getColorStyles(props)};

  &:hover {
    cursor: ${props => !props.isExpanded && 'pointer'};
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME,
  accordionType: 'basic',
};
