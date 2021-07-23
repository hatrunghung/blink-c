import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CardContext } from '../contexts/useCardContext';
import { StyledCard } from './StyledCard';
import { StyledCardWrapper } from './StyledCardWrapper';
import { StyledImageHeader } from './StyledImageHeader';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  headerSrc?: string;
  thumbnailSrc?: string;
}

const Card = forwardRef<HTMLDivElement, ICardProps>((props, ref) => {
  const value = useMemo(
    () => ({
      thumbnailSrc: props.thumbnailSrc,
    }),
    [props.thumbnailSrc],
  );
  return (
    <CardContext.Provider value={value}>
      <StyledCard ref={ref} {...props}>
        {props.headerSrc ? (
          <StyledImageHeader src={props.headerSrc} alt="" />
        ) : null}
        <StyledCardWrapper>{props.children}</StyledCardWrapper>
      </StyledCard>
    </CardContext.Provider>
  );
});

Card.displayName = 'Card';

Card.propTypes = {
  headerSrc: PropTypes.string,
  thumbnailSrc: PropTypes.string,
};

export default Card;
