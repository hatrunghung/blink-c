import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';
import { StyledContent } from './StyledContent';
import { StyledTail } from './StyledTail';
import { StyledTitle } from './StyledTitle';
import { DIRECTION } from './typesEnum';

const COMPONENT_ID = 'Stepper.step';

export interface IStyledStepProps {
  direction?: 'horizontal' | 'vertical';
  isHovered?: boolean;
}

export const StyledStep = styled.div.attrs<IStyledStepProps>({
  'component-blink-id': COMPONENT_ID,
})<IStyledStepProps>`
  position: relative;
  vertical-align: top;
  display: ${props =>
    props.direction === DIRECTION.HORIZONTAL ? 'inline-block' : 'block'};
  overflow: ${props =>
    props.direction === DIRECTION.HORIZONTAL ? 'hidden' : 'visible'};
  flex: ${props =>
    props.direction === DIRECTION.HORIZONTAL ? '1' : '1 0 auto'};
  white-space: ${props => props.direction === DIRECTION.HORIZONTAL && 'nowrap'};
  box-sizing: border-box;

  &:not(:first-child) {
    margin-left: ${props =>
      props.direction === DIRECTION.HORIZONTAL &&
      `${props.theme.space.base * 4}px`};
  }

  /* hide vertical line for last step */
  &:last-child > ${StyledTail}:after {
    display: none;
  }

  /* hide horizontal line for last step */
  &:last-child > ${StyledContent} > ${StyledTitle}:after {
    display: none;
  }

  /* WIP: add style on hover event (future case) */
  /* &:hover {
    
  } */

  ${props => getComponentStyles(COMPONENT_ID, props)}
`;

StyledStep.defaultProps = {
  theme: DEFAULT_THEME,
  direction: 'horizontal',
};
