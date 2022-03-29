import React, { forwardRef, HTMLAttributes } from 'react';
import { useCardContext } from '../contexts/useCardContext';
import { StyledCardBody } from './styles/StyledCardBody';
import { StyledCardContent } from './styles/StyledCardContent';
import { StyledThumbnail } from './styles/StyledThumbnail';

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
