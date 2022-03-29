import React, {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  RefAttributes,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { CardContext } from '../contexts/useCardContext';
import { StyledCard } from './styles/StyledCard';
import { StyledCardWrapper } from './styles/StyledCardWrapper';
import { StyledImageHeader } from './styles/StyledImageHeader';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import CardAction from './CardAction';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  headerSrc?: string;
  thumbnailSrc?: string;
}

type CardComponent = ForwardRefExoticComponent<ICardProps> &
  RefAttributes<HTMLDivElement> & {
    Title: typeof CardTitle;
    Body: typeof CardBody;
    Action: typeof CardAction;
  };

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

(Card as CardComponent).Title = CardTitle;
(Card as CardComponent).Body = CardBody;
(Card as CardComponent).Action = CardAction;

export default Card as CardComponent;
