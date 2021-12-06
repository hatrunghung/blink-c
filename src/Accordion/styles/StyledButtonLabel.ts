import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getComponentStyles, getLineHeight } from '../../theme/utils';

export const COMPONENT_ID = 'Accordion.button_label';

export interface IStyledButtonLabelProps {
  isDisabled?: boolean;
  isExpanded?: boolean;
  accordionSize: 'small' | 'normal';
}

function getPaddingStyles(
  props: IStyledButtonLabelProps & ThemeProps<DefaultTheme>,
) {
  const { base } = props.theme.space;
  const horizontalPaddingValue = 0;
  let verticalPaddingValue;

  if (props.accordionSize === 'small') {
    verticalPaddingValue = `${base * 2}px`;
  } else {
    verticalPaddingValue = `${base * 4}px`;
  }

  return css`
    padding: ${horizontalPaddingValue} ${verticalPaddingValue};
  `;
}

export const StyledButtonLabel = styled.button.attrs<IStyledButtonLabelProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledButtonLabelProps>`
  background: transparent;
  font-family: inherit;
  border: none;
  line-height: ${props =>
    getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.xs)};
  width: 100%;
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => getPaddingStyles(props)};

  &::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: ${props => props.isDisabled && 'default'};
  }

  ${props => getComponentStyles(COMPONENT_ID, props)}
`;

StyledButtonLabel.defaultProps = {
  theme: DEFAULT_THEME,
  accordionSize: 'normal',
};
