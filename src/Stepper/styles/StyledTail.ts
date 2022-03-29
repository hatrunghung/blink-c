import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getColors, getComponentStyles } from '../../theme/utils';
import { SIZE, DIRECTION, COLOR_TYPE, STATUS } from '../typesEnum';

const COMPONENT_ID = 'Stepper.tail';

export interface IStyledTailProps {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'default';
  colorType?: 'primary' | 'basic';
  status?: 'finished' | 'processing' | 'waiting';
}

function getAlignmentStyles(
  props: IStyledTailProps & ThemeProps<DefaultTheme>,
) {
  const { base } = props.theme.space;
  const topAlignValue = 0;
  let leftAlignValue;
  let paddingValue;

  if (props.size === SIZE.DEFAULT) {
    leftAlignValue = `${base * 4}px`;
    paddingValue = `${base * 9.5}px 0 ${base * 1.5}px`;
  } else {
    leftAlignValue = `${base * 3}px`;
    paddingValue = `${base * 7}px 0 ${base * 1.5}px`;
  }

  return css`
    top: ${topAlignValue};
    left: ${leftAlignValue};
    padding: ${paddingValue};
  `;
}

export const StyledTail = styled.div.attrs<IStyledTailProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledTailProps>`
  display: ${props =>
    props.direction === DIRECTION.VERTICAL ? 'block' : 'none'};
  position: absolute;
  width: 1px;
  height: 100%;
  box-sizing: border-box;

  ${props => getAlignmentStyles(props)};

  &:after {
    content: '';
    width: 1px;
    height: 100%;
    display: inline-block;
    border-radius: 1px;
    background-color: ${props =>
      props.status === STATUS.FINISHED && props.colorType === COLOR_TYPE.PRIMARY
        ? getColors('primary', 600, props.theme)
        : getColors('neutral', 300, props.theme)};
  }

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledTail.defaultProps = {
  theme: DEFAULT_THEME,
  size: 'default',
  direction: 'horizontal',
  colorType: 'primary',
};
