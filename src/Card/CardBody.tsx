import React, { forwardRef, HTMLAttributes } from 'react';
import { useCardContext } from '../contexts/useCardContext';
import { StyledCardBody } from './StyledCardBody';
import { StyledCardContent } from './StyledCardContent';
import { StyledThumbnail } from './StyledThumbnail';

const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { thumbnailSrc } = useCardContext();
    return (
      <StyledCardBody ref={ref}>
        {thumbnailSrc ? <StyledThumbnail src={thumbnailSrc} alt="" /> : null}
        <StyledCardContent>{props.children}</StyledCardContent>
      </StyledCardBody>
    );
  },
);

CardBody.displayName = 'CardBody';

export default CardBody;
