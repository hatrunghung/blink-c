import React, { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './styles/StyledParagraph';

export interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'large' | 'medium' | 'small';
  isBold?: boolean;
}

const Paragraph = forwardRef<HTMLParagraphElement, IParagraphProps>(
  ({ size, isBold, ...props }, ref) => {
    return <StyledParagraph size={size} isBold={isBold} ref={ref} {...props} />;
  },
);

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  isBold: PropTypes.bool,
};

Paragraph.defaultProps = {
  size: 'medium',
};

export default Paragraph;
