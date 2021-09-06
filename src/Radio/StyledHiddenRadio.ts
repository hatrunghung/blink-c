import styled, {
  css,
  DefaultTheme,
  keyframes,
  ThemeProps,
} from 'styled-components';
import DEFAULT_THEME from '../theme';
import { getColors, getComponentStyles } from '../theme/utils';
import { StyledInnerRadio } from './StyledInnerRadio';
import { StyledOuterRadio } from './StyledOuterRadio';

const COMPONENT_ID = 'Radio.hidden_radio';

const scaleInnerAnimation = keyframes`
	from {
		transform: scale(2);
	}
	to {
		transform: scale(1);
	}
`;

function getCheckedStyles(props: ThemeProps<DefaultTheme>) {
  const outerRadioColor = getColors('primary', 600, props.theme);
  return css`
    &:checked + ${StyledOuterRadio} {
      background-color: ${outerRadioColor};

      & > ${StyledInnerRadio} {
        display: block;
        animation-name: ${scaleInnerAnimation};
        animation-duration: 300ms;
        animation-fill-mode: forwards;
      }
    }
  `;
}

/*
	This component is not to be visually displayed, but available for the screen-reader.
	Read more: https://polished.js.org/docs/#hidevisually
*/

export const StyledHiddenRadio = styled.input.attrs({
  'data-blink-id': COMPONENT_ID,
  type: 'radio' as string,
})`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  ${props => getCheckedStyles(props)};

  ${props => getComponentStyles(COMPONENT_ID, props)};
`;

StyledHiddenRadio.defaultProps = {
  theme: DEFAULT_THEME,
};
