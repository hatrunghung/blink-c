import React, { RefAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import IconButton, { IIconButtonProps } from './IconButton';

export interface IToggleIconButtonProps extends IIconButtonProps {
  isPressed?: boolean | 'mixed';
}

const ToggleIconButton: React.FunctionComponent<
  IToggleIconButtonProps & RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, IToggleIconButtonProps>(
  ({ isPressed, ...props }, ref) => {
    return <IconButton aria-pressed={isPressed} ref={ref} {...props} />;
  },
);

ToggleIconButton.displayName = 'ToggleIconButton';

ToggleIconButton.propTypes = {
  isPressed: PropTypes.oneOf([true, false, 'mixed']),
  ...IconButton.propTypes,
};

ToggleIconButton.defaultProps = {
  isPressed: false,
  size: 'medium',
};

export default ToggleIconButton;
