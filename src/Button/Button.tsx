import React, {
  createRef,
  ButtonHTMLAttributes,
  RefAttributes,
  forwardRef,
  SVGAttributes,
} from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton';
import { useButtonGroupContext } from '../contexts/ButtonGroupContext';
import { useSplitButtonContext } from '../contexts/useSplitButtonContext';
import { StyledIcon } from './StyledIcon';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  isPrimary?: boolean;
  isDanger?: boolean;
  isBasic?: boolean;
  isStretched?: boolean;
  shape?: 'normal' | 'round' | 'pill';
  isLink?: boolean;
  isSelected?: boolean;
  focusInset?: boolean;
}

const Button: React.FunctionComponent<
  IButtonProps & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const buttonGroupContext = useButtonGroupContext();
  const splitButtonContext = useSplitButtonContext();

  let computedProps;

  computedProps = {
    ...props,
    focusInset:
      props.focusInset ||
      buttonGroupContext !== undefined ||
      splitButtonContext,
  };

  if (buttonGroupContext && !props.disabled) {
    if (!props.value) {
      throw new Error(
        '"value" prop must be provided to Button when used within a ButtonGroup',
      );
    }

    computedProps = buttonGroupContext.getButtonProps({
      item: props.value,
      focusRef: createRef(),
      isSelected: props.value === buttonGroupContext.selectedItem,
      ...props,
    });
  }

  return <StyledButton ref={ref} {...computedProps} />;
});

Button.displayName = 'Button';

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isPrimary: PropTypes.bool,
  isDanger: PropTypes.bool,
  isBasic: PropTypes.bool,
  shape: PropTypes.oneOf(['round', 'pill']),
  isLink: PropTypes.bool,
  isStretched: PropTypes.bool,
  focusInset: PropTypes.bool,
  isSelected: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: 'medium',
  shape: 'normal',
};

export interface IIconProps extends SVGAttributes<SVGElement> {
  isRotated?: boolean;
  children: any;
}

const StartIcon = (props: IIconProps) => (
  <StyledIcon position="start" {...props} />
);
const EndIcon = (props: IIconProps) => <StyledIcon position="end" {...props} />;

(Button as any).StartIcon = StartIcon;
(Button as any).EndIcon = EndIcon;

export default Button as React.FunctionComponent<
  IButtonProps & RefAttributes<HTMLButtonElement>
> & {
  StartIcon: typeof StartIcon;
  EndIcon: typeof EndIcon;
};
