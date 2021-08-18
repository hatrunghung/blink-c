import styled, {
  css,
  DefaultTheme,
  keyframes,
  ThemeProps,
} from 'styled-components';
import DEFAULT_THEME from '../../theme';
import { ToastPlacement } from './toastReducer';

const fadeUp = keyframes`
	from {
		transform: translateY(100px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

const fadeDown = keyframes`
	from {
		transform: translateY(-100px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

interface IToastAnimationWrapperProps {
  placement: ToastPlacement;
}

interface IToastContainerProps {
  placement: ToastPlacement;
}

function getToastPlacementStyles(
  props: IToastContainerProps & ThemeProps<DefaultTheme>,
) {
  const horizontalDistance = props.theme.space.sm;
  const verticalDistance = props.theme.space.xs;

  const topStartStyles = css`
    top: ${verticalDistance};
    left: ${horizontalDistance};
  `;

  const topStyles = css`
    top: ${verticalDistance};
    left: 50%;
    transform: translate(-50%, 0);
  `;

  const topEndStyles = css`
    top: ${verticalDistance};
    right: ${horizontalDistance};
  `;

  const bottomStartStyles = css`
    bottom: ${verticalDistance};
    left: ${horizontalDistance};
  `;

  const bottomStyles = css`
    bottom: ${verticalDistance};
    left: 50%;
    transform: translate(-50%, 0);
  `;

  const bottomEndStyles = css`
    bottom: ${verticalDistance};
    right: ${horizontalDistance};
  `;

  switch (props.placement) {
    case 'top-start':
      return topStartStyles;
    case 'top':
      return topStyles;
    case 'top-end':
      return topEndStyles;
    case 'bottom-start':
      return bottomStartStyles;
    case 'bottom':
      return bottomStyles;
    case 'bottom-end':
      return bottomEndStyles;
    default:
      return '';
  }
}

export const StyledToastAnimationWrapper = styled.div<IToastAnimationWrapperProps>`
  animation: ${props =>
    props.placement.includes('top')
      ? css`
          ${fadeDown} 550ms ease-in-out;
        `
      : css`
          ${fadeUp} 550ms ease-in-out;
        `};
  margin-bottom: ${props => props.theme.space.md};
`;

export const StyledToastContainer = styled.div<IToastContainerProps>`
  position: fixed;

  ${props => getToastPlacementStyles(props)};
`;

StyledToastAnimationWrapper.defaultProps = {
  theme: DEFAULT_THEME,
};

StyledToastContainer.defaultProps = {
  theme: DEFAULT_THEME,
};
