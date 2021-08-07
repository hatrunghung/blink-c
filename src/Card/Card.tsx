import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { CardContext } from '../contexts/useCardContext';
import { StyledCard } from './StyledCard';
import { StyledCardWrapper } from './StyledCardWrapper';
import { StyledImageHeader } from './StyledImageHeader';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import CardAction from './CardAction';

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

(Card as any).Title = CardTitle;
(Card as any).Body = CardBody;
(Card as any).Action = CardAction;

export default Card as ForwardRefExoticComponent<
  ICardProps & RefAttributes<HTMLDivElement>
> & {
  Title: typeof CardTitle;
  Body: typeof CardBody;
  Action: typeof CardAction;
};
