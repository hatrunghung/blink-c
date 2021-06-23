import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { em, math, rgba } from 'polished';
import DEFAULT_THEME from '../theme';
import { StyledIcon } from './StyledIcon';
import { StyledButtonGroup } from './StyledButtonGroup';
import { getColors, getComponentStyles } from '../theme/utils';

const COMPONENT_ID = 'Button.button';

export interface IStyledButtonProps {
  size?: 'small' | 'medium' | 'large';
  isBasic?: boolean;
  isPrimary?: boolean;
  isDanger?: boolean;
  isLink?: boolean;
  shape?: 'normal' | 'round' | 'pill';
  isStretched?: boolean;
  disabled?: boolean;
  focusInset: boolean;
  isSelected?: boolean;
}

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

function getBorderRadius(props: IStyledButtonProps & ThemeProps<DefaultTheme>) {
  if (props.isLink) {
    return 0;
  } else if (props.shape === 'pill') {
    return '20px';
  } else if (props.shape === 'round') {
    return '50%';
  }

  return props.theme.borderRadius.md;
}

export function getHeight(
  props: IStyledButtonProps & ThemeProps<DefaultTheme>,
): string {
  if (props.size === SIZE.SMALL) {
    return `${props.theme.space.base * 8}px`;
  } else if (props.size === SIZE.LARGE) {
    return `${props.theme.space.base * 12}px`;
  }

  return `${props.theme.space.base * 10}px`;
}

function getSizeStyles(props: IStyledButtonProps & ThemeProps<DefaultTheme>) {
  let returnValue;
  if (props.isLink) {
    returnValue = css`
      padding: 0;
      font-size: inherit;
    `;
  } else {
    const height = getHeight(props);
    const lineHeight = math(`${height} - (${props.theme.borderWidths.sm} * 2)`);
    let padding;
    let fontSize;

    if (props.size === SIZE.SMALL) {
      fontSize = props.theme.fontSizes.xs;
      padding = `${props.theme.space.sm}px`;
    } else {
      fontSize = props.theme.fontSizes.sm;

      if (props.size === SIZE.LARGE) {
        padding = `${props.theme.space.lg}px`;
      } else {
        padding = `${props.theme.space.md}px`;
      }
    }

    returnValue = css`
      padding: 0
        ${em(math(`${padding} - ${props.theme.borderWidths.sm}`), fontSize)};
      height: ${height};
      line-height: ${lineHeight};
      font-size: ${fontSize};
    `;
  }

  return returnValue;
}

function getColorStyles(
  props: IStyledButtonProps &
    ThemeProps<DefaultTheme> &
    HTMLAttributes<HTMLButtonElement>,
) {
  let returnValue;
  let hue;

  if (props.disabled) {
    hue = 'neutral';
  } else if (props.isDanger) {
    hue = 'danger';
  } else {
    hue = 'primary';
  }

  const shade = 600;
  const baseColor = getColors(hue, shade, props.theme);
  const hoverColor = getColors(hue, shade + 100, props.theme);
  const activeColor = getColors(hue, shade + 200, props.theme);
  const disabledBackgroundColor = getColors(hue, shade - 400, props.theme);
  const disabledForegroundColor = getColors(hue, shade - 200, props.theme);
  const boxShadowColor = props.focusInset
    ? props.theme.palette.white
    : baseColor;
  const boxShadow = `${
    props.focusInset ? 'inset' : ''
  } ${props.theme.shadows.md(rgba(boxShadowColor as string, 0.25))}`;

  if (props.isLink) {
    returnValue = css`
      background-color: transparent;
      color: ${baseColor};

      &:hover,
      &:focus,
      &:focus-visible {
        color: ${hoverColor};
      }

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        color: ${activeColor};
      }

      &:disabled {
        color: ${disabledForegroundColor};
      }
    `;
  } else if (props.isPrimary || props.isSelected) {
    returnValue = css`
      background-color: ${props.isPrimary && props.isSelected
        ? activeColor
        : baseColor};
      color: ${props.theme.colors.background};

      &:hover {
        background-color: ${hoverColor};
      }

      &:focus,
      &:focus-visible {
        box-shadow: ${boxShadow};
      }

      &:active {
        background-color: ${activeColor};
      }

      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        background-color: ${props.isPrimary && activeColor};
      }

      &:disabled {
        background-color: ${disabledBackgroundColor};
        color: ${disabledForegroundColor};
      }
    `;
  } else {
    returnValue = css`
      border-color: ${!props.isBasic && baseColor};
      background-color: transparent;
      color: ${baseColor};

      &:hover {
        border-color: ${!props.isBasic && hoverColor};
        background-color: ${rgba(baseColor as string, 0.08)};
        color: ${hoverColor};
      }

      &:focus,
      &:focus-visible {
        box-shadow: ${boxShadow};
      }

      &:active,
      &[aria-pressed='true'],
      &[aria-pressed='mixed'] {
        border-color: ${!props.isBasic && hoverColor};
        background-color: ${rgba(baseColor as string, 0.25)};
        color: ${activeColor};
      }

      &:disabled {
        border-color: transparent;
        background-color: ${disabledBackgroundColor};
        color: ${disabledForegroundColor};
      }
    `;
  }

  return returnValue;
}

function getIconStyles(props: IStyledButtonProps & ThemeProps<DefaultTheme>) {
  const size =
    props.size === SIZE.SMALL
      ? props.theme.iconSizes.sm
      : props.theme.iconSizes.md;

  return css`
    width: ${size};
    min-width: ${size};
    height: ${size};
    vertical-align: ${props.isLink && 'middle'};
  `;
}

function getButtonGroupStyles(
  props: IStyledButtonProps & ThemeProps<DefaultTheme>,
) {
  const isPrimary = props.isPrimary;
  const rtl = props.theme.rtl;
  const lightBorderColor = props.theme.colors.background;

  return css`
    position: relative;

    margin-${rtl ? 'right' : 'left'}: ${math(
    `${props.theme.borderWidths.sm} * -1`,
  )};
    border-top-width: ${isPrimary && 0};
    border-bottom-width: ${isPrimary && 0};
    border-right-color: ${isPrimary && 0};
    border-left-color: ${isPrimary && 0};

    &:hover,
    &:active {
      z-index: 1;
    }

    &:disabled {
      z-index: -1;
      border-top-width: 0;
      border-bottom-width: 0;
      border-right-color: ${lightBorderColor};
      border-left-color: ${lightBorderColor};
    }

    &:first-of-type:not(:last-of-type) {
      margin-${rtl ? 'right' : 'left'}: 0;
      border-top-${rtl ? 'left' : 'right'}-radius: 0;
      border-bottom-${rtl ? 'left' : 'right'}-radius: 0;
      border-${rtl ? 'right' : 'left'}-width: ${isPrimary && 0};
    }

    &:last-of-type:not(:first-of-type) {
      margin-${rtl ? 'left' : 'right'}: 0;
      border-top-${rtl ? 'right' : 'left'}-radius: 0;
      border-bottom-${rtl ? 'right' : 'left'}-radius: 0;
      border-${rtl ? 'left' : 'right'}-width: ${isPrimary && 0};
    }

    &:not(:first-of-type):not(:last-of-type) {
      border-radius: 0;
    }

    &:first-of-type:not(:last-of-type) ${StyledIcon} {
      margin-${rtl ? 'left' : 'right'}: ${props.shape === 'pill' && '-2px'};
    }

    &:last-of-type:not(:first-of-type) ${StyledIcon} {
      margin-${rtl ? 'right' : 'left'}: ${props.shape === 'pill' && '-2px'};
    }
  `;
}

export const StyledButton = styled.button.attrs<IStyledButtonProps>(props => ({
  'component-blink-id': COMPONENT_ID,
  type: props.type || 'button',
}))<IStyledButtonProps>`
  display: ${props => (props.isLink ? 'inline' : 'inline-flex')};
  align-items: ${props => !props.isLink && 'center'};
  justify-content: ${props => !props.isLink && 'center'};
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  margin: 0;
  border: ${props =>
    props.isLink ? 'none' : `${props.theme.borders.sm} transparent`};
  border-radius: ${props => getBorderRadius(props)};
  cursor: pointer;
  width: ${props => (props.isStretched ? '100%' : '')};
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: ${props => !props.isLink && 'nowrap'};
  font-family: inherit;
  font-weight: ${props =>
    props.isLink ? 'inherit' : props.theme.fontWeights.regular};
  box-sizing: border-box;
  --webkit-touch-callout: none;

  &::-moz-focus-inner {
    margin: 0;
    padding: 0;
  }

  &:active,
  &[aria-pressed='true'],
  &[aria-pressed='mixed'] {
    transition: border-color 0.1s ease-in-out, color 0.1s ease-in-out,
      background-color 0.1s ease-in-out;
    text-decoration: ${props => (props.isLink ? 'underline' : 'none')};
  }

  &:focus {
    outline: none;
    text-decoration: ${props => props.isLink && 'none'};
  }

  &:hover {
    text-decoration: ${props => (props.isLink ? 'underline' : 'none')};
  }

  &:disabled {
    cursor: default;
    text-decoration: ${props => props.isLink && 'none'};
  }

  & ${StyledIcon} {
    ${props => getIconStyles(props)};
  }

  ${StyledButtonGroup} & {
    ${props => getButtonGroupStyles(props)};
  }

  ${props => getSizeStyles(props)};

  ${props => getColorStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: DEFAULT_THEME,
  shape: 'normal',
};
