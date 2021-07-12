import styled from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getComponentStyles } from '../theme/utils';
import { DIRECTION, SIZE } from './typesEnum';

const COMPONENT_ID = 'Stepper.content';

export interface IStyledContentProps {
  size?: 'small' | 'default';
  direction?: 'horizontal' | 'vertical';
}

export const StyledContent = styled.div.attrs<IStyledContentProps>({
  'component-blink-id': COMPONENT_ID,
})<IStyledContentProps>`
  vertical-align: top;
  display: ${props =>
    props.direction === DIRECTION.VERTICAL ? 'block' : 'inline-block'};
  min-height: ${props =>
    props.direction === DIRECTION.VERTICAL && `${props.theme.space.xl}`};
  overflow: ${props => props.direction === DIRECTION.VERTICAL && 'hidden'};
  box-sizing: border-box;
  margin-bottom: ${props =>
    props.direction === DIRECTION.VERTICAL &&
    props.size === SIZE.SMALL &&
    '4px'};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledContent.defaultProps = {
  theme: DEFAULT_THEME,
  direction: 'horizontal',
};
