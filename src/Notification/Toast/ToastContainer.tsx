import React, { FC, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledToastAnimationWrapper, StyledToastContainer } from './styled';
import { Toast } from './Toast';
import { IToast, ToastPlacement } from './toastReducer';

interface IToastContainerProps extends HTMLAttributes<HTMLDivElement> {
  toasts: IToast[];
  placement: ToastPlacement;
}

export const ToastContainer: FC<IToastContainerProps> = ({
  toasts,
  placement,
}) => {
  return (
    <StyledToastContainer placement={placement}>
      {toasts.map(toast => (
        <StyledToastAnimationWrapper key={toast.id} placement={placement}>
          <Toast toast={toast} />
        </StyledToastAnimationWrapper>
      ))}
    </StyledToastContainer>
  );
};

ToastContainer.propTypes = {
  toasts: PropTypes.array,
  placement: PropTypes.oneOf([
    'top-start',
    'top',
    'top-end',
    'bottom-start',
    'bottom',
    'bottom-end',
  ]),
};
