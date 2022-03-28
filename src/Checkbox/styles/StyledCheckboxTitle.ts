import styled from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { getColors, getComponentStyles } from '../../theme/utils';

const COMPONENT_ID = 'Checkbox.checkbox_title';

export interface IStyledCheckboxTitleProps {
  disabled?: boolean;
}

export const StyledCheckboxTitle = styled.div.attrs<IStyledCheckboxTitleProps>({
  'data-blink-id': COMPONENT_ID,
})<IStyledCheckboxTitleProps>`
  color: ${props => props.disabled && getColors('neutral', 400, props.theme)};
  margin-left: ${props => props.theme.space.xs};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckboxTitle.defaultProps = {
  theme: DEFAULT_THEME,
};
