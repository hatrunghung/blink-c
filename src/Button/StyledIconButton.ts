import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles, getColors } from '../theme/utils';
import { StyledButton, IStyledButtonProps, getHeight } from './StyledButton';
import { StyledIcon } from './StyledIcon';

const COMPONENT_ID = 'Button.iconButton';

function getIconColorStyles(
  props: IStyledButtonProps & ThemeProps<DefaultTheme>,
) {
  const shade = 600;
  const baseColor = getColors('neutralHue', shade, props.theme);
  const hoverColor = getColors('neutralHue', shade + 100, props.theme);
  const activeColor = getColors('neutralHue', shade + 200, props.theme);

  return css`
    color: ${baseColor};

    &:hover {
      color: ${hoverColor};
    }

    &:active,
    &[aria-pressed='true'],
    &[aria-pressed='mixed'] {
      color: ${activeColor};
    }
  `;
}

function getIconButtonStyles(
  props: IStyledButtonProps & ThemeProps<DefaultTheme>,
) {
  const width = getHeight(props);

  return css`
    border: ${props.isBasic && 'none'};
    padding: 0;
    width: ${width};
    min-width: ${width};

    ${props.isBasic &&
    !(props.isPrimary || props.isDanger || props.disabled) &&
    getIconColorStyles(props)}

    &:disabled {
      background-color: ${!props.isPrimary && 'transparent'};
    }
  `;
}

function getIconStyles(props: IStyledButtonProps & ThemeProps<DefaultTheme>) {
  const size = props.theme.iconSizes.md;

  return css`
    width: ${size};
    height: ${size};

    & > svg {
      transition: opacity 0.25s ease-in-out;
    }
  `;
}

export const StyledIconButton = styled(StyledButton).attrs({
  'component-blink-id': COMPONENT_ID,
})`
  ${props => getIconButtonStyles(props)};

  & ${StyledIcon} {
    ${props => getIconStyles(props)};
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledIconButton.defaultProps = {
  theme: DEFAULT_THEME,
};
