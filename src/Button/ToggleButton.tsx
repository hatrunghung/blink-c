import React, { RefAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Button, { IButtonProps } from './Button';

export interface IToggleButtonProps extends IButtonProps {
  /**
   *
   *
   * @type {(boolean | 'mixed')}
   * @memberof IToggleButtonProps
   */
  isPressed?: boolean | 'mixed';
}

const ToggleButton: React.FunctionComponent<
  IToggleButtonProps & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, IToggleButtonProps>(
  ({ isPressed, ...props }, ref) => {
    return <Button aria-pressed={isPressed} ref={ref} {...props} />;
  },
);

ToggleButton.displayName = 'ToggleButton';

ToggleButton.propTypes = {
  ...Button.propTypes,
  isPressed: PropTypes.oneOf([true, false, 'mixed']),
};

ToggleButton.defaultProps = {
  size: 'medium',
  isPressed: false,
};

export default ToggleButton;
