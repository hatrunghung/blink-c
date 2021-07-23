import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles, getLineHeight } from '../theme/utils';
import { SIZE, DIRECTION } from './typesEnum';

export interface IStyledStepperProps {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'default';
}

const COMPONENT_ID = 'Stepper.stepper';

function getLineHeightStyles(
  props: IStyledStepperProps & ThemeProps<DefaultTheme>,
) {
  const fontSize = props.theme.fontSizes.xs;
  const height =
    props.size === SIZE.DEFAULT
      ? props.theme.lineHeights.lg
      : props.theme.lineHeights.md;

  const lineHeightValue = getLineHeight(height, fontSize);

  return css`
    line-height: ${lineHeightValue};
  `;
}

export const StyledStepper = styled.div.attrs<IStyledStepperProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledStepperProps>`
  display: flex;
  flex-direction: ${props =>
    props.direction === DIRECTION.VERTICAL && 'column'};
  box-sizing: border-box;
  list-style: none;
  width: 100%;

  ${props => getLineHeightStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledStepper.defaultProps = {
  theme: DEFAULT_THEME,
  size: 'default',
  direction: 'horizontal',
};
