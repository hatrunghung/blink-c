import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';
import { DIRECTION, SIZE, STATUS } from './typesEnum';

const COMPONENT_ID = 'Stepper.step_description';

export interface IStyledDescriptionProps {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'default';
  status?: 'finished' | 'processing' | 'waiting';
}

function getPaddingStyles(
  props: IStyledDescriptionProps & ThemeProps<DefaultTheme>,
) {
  let paddingBottomValue;
  if (props.direction === DIRECTION.VERTICAL) {
    if (props.size === SIZE.DEFAULT) {
      paddingBottomValue = props.theme.space.sm;
    } else {
      paddingBottomValue = props.theme.space.xs;
    }
  } else {
    paddingBottomValue = 0;
  }

  return css`
    padding-bottom: ${paddingBottomValue};
  `;
}

export const StyledDescription = styled.div.attrs<IStyledDescriptionProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledDescriptionProps>`
  font-size: ${props => props.theme.fontSizes.xxs};
  max-width: ${props => props.direction === DIRECTION.HORIZONTAL && '140px'};
  color: ${props =>
    props.status === STATUS.PROCESSING
      ? getColors('neutral', 700, props.theme)
      : getColors('neutral', 500, props.theme)};
  box-sizing: border-box;

  ${props => getPaddingStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledDescription.defaultProps = {
  theme: DEFAULT_THEME,
  direction: 'horizontal',
};
