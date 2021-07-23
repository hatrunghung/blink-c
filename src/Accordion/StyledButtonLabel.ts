import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles, getLineHeight } from '../theme/utils';

export const COMPONENT_ID = 'Accordion.button_label';

export interface IStyledButtonLabelProps {
  accordionType?: 'basic' | 'borderless' | 'ghost';
  isDisabled?: boolean;
  isExpanded?: boolean;
}

export const StyledButtonLabel = styled.button.attrs<IStyledButtonLabelProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledButtonLabelProps>`
  background: transparent;
  font-family: inherit;
  border: none;
  padding: ${props => `0 ${props.theme.space.base * 4}px`};
  line-height: ${props =>
    getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.xs)};
  width: 100%;
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.semibold};

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
  accordionType: 'basic',
};
