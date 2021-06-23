import React, { ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './StyledIcon';
import { StyledIconButton } from './StyledIconButton';
import { useSplitButtonContext } from '../contexts/useSplitButtonContext';

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
  isDanger?: boolean;
  isBasic?: boolean;
  shape?: 'normal' | 'round' | 'pill';
  focusInset?: boolean;
  isRotated?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const IconButton: React.FunctionComponent<
  IIconButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ children, isRotated, ...otherProps }, ref) => {
    const focusInset = useSplitButtonContext();

    return (
      <StyledIconButton
        ref={ref}
        focusInset={otherProps.focusInset || focusInset}
        {...otherProps}
      >
        <StyledIcon isRotated={isRotated}>{children}</StyledIcon>
      </StyledIconButton>
    );
  },
);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  isPrimary: PropTypes.bool,
  isDanger: PropTypes.bool,
  isBasic: PropTypes.bool,
  shape: PropTypes.oneOf(['normal', 'pill', 'round']),
  focusInset: PropTypes.bool,
  isRotated: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

IconButton.defaultProps = {
  shape: 'round',
  isBasic: true,
  size: 'medium',
};

export default IconButton;
