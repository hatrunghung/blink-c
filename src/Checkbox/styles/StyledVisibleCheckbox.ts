import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getColors, getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Checkbox.visible_checkbox';

export interface IStyledVisibleCheckboxProps {
  indeterminate?: boolean;
  disabled?: boolean;
  checked?: boolean;
}

function getColorStyles(
  props: IStyledVisibleCheckboxProps & ThemeProps<DefaultTheme>,
) {
  let backgroundColorValue;
  let innerTextColorValue;

  const shade = 600;
  const primaryColor = getColors('primary', shade, props.theme);
  const disabledBackgroundColor = getColors(
    'neutral',
    shade - 400,
    props.theme,
  );
  const disabledInnerColor = getColors('neutral', shade - 200, props.theme);
  const disabledBackgroundIndeterminateColor = getColors(
    'neutral',
    shade - 200,
    props.theme,
  );
  const disabledInnerIndeterminateColor = getColors(
    'neutral',
    shade,
    props.theme,
  );

  if (props.disabled) {
    if (props.indeterminate) {
      backgroundColorValue = disabledBackgroundIndeterminateColor;
      innerTextColorValue = disabledInnerIndeterminateColor;
    } else {
      backgroundColorValue = disabledBackgroundColor;
      innerTextColorValue = disabledInnerColor;
    }
  } else {
    if (props.indeterminate) {
      backgroundColorValue = 'transparent';
      innerTextColorValue = primaryColor;
    } else {
      if (props.checked) {
        backgroundColorValue = primaryColor;
        innerTextColorValue = 'white';
      } else {
        backgroundColorValue = 'transparent';
        innerTextColorValue = '';
      }
    }
  }

  return css`
    background-color: ${backgroundColorValue};
    color: ${innerTextColorValue};
  `;
}

export const StyledVisibleCheckbox = styled.span.attrs<IStyledVisibleCheckboxProps>(
  {
    'data-blink-id': COMPONENT_ID,
  },
)<IStyledVisibleCheckboxProps>`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease-in-out;
  width: ${props => props.theme.iconSizes.md};
  height: ${props => props.theme.iconSizes.md};
  margin: ${props => props.theme.space.xxs};
  border-width: ${props => props.theme.borderWidths.sm};
  border-style: ${props => props.theme.borderStyles.solid};
  border-color: ${props =>
    !props.checked && getColors('neutral', 300, props.theme)};
  border-radius: ${props => props.theme.borderRadius.sm};

  ${props => getColorStyles(props)};

  &:hover {
    border-color: ${props =>
      !props.checked &&
      !props.disabled &&
      getColors('primary', 600, props.theme)};
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledVisibleCheckbox.defaultProps = {
  theme: DEFAULT_THEME,
};
