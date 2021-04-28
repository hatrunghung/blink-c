import React, { AnchorHTMLAttributes, RefAttributes, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledAnchorButton } from './StyledAnchorButton';

export interface IAnchorButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isDanger?: boolean;
  isExternal?: boolean;
}

const AnchorButton: React.FunctionComponent<
  IAnchorButtonProps & RefAttributes<HTMLAnchorElement>
> = forwardRef(({ children, isExternal, ...otherProps }, ref) => {
  let anchorButtonProps = otherProps;

  if (isExternal) {
    anchorButtonProps = {
      target: '_blank',
      rel: 'noreferrer noopener',
      ...anchorButtonProps,
    };
  }

  return (
    <StyledAnchorButton ref={ref} {...(anchorButtonProps as any)}>
      {children}
    </StyledAnchorButton>
  );
});

AnchorButton.displayName = 'AnchorButton';

AnchorButton.propTypes = {
  isDanger: PropTypes.bool,
  isExternal: PropTypes.bool,
};

export default AnchorButton;
