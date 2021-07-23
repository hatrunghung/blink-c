import React, {
  FocusEvent,
  forwardRef,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { useAccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledHeader } from './StyledHeader';
import { COMPONENT_ID as buttonBlinkId } from './StyledButtonLabel';
import composeEventHandler from '../hooks/utils/composeEventHandler';
import { StyledRotateIcon } from './StyledRotateIcon';
import { ChevronDown } from 'blinkicon';

export interface IAccordionHeaderProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<any>) => void;
  onFocus?: (event: FocusEvent<any>) => void;
  onBlur?: (event: FocusEvent<any>) => void;
}

export const AccordionHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ onClick, onFocus, onBlur, ...props }, ref) => {
  const {
    level: ariaLevel,
    accordionType,
    expandedSection,
    getHeaderProps,
    getButtonTriggerProps,
    isAnimated,
  } = useAccordionContext();

  const sectionIndex = useAccordionSectionContext();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isExpanded = expandedSection.includes(sectionIndex);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onClick: onTriggerClick, onKeyDown } = getButtonTriggerProps({
    index: sectionIndex,
    type: 'button',
  });

  const onHeaderFocus = (event: FocusEvent) => {
    event.persist();

    setTimeout(() => {
      if (event.target.getAttribute('data-blink-id') === buttonBlinkId) {
        setIsFocused(true);
      }
    }, 0);
  };

  return (
    <StyledHeader
      {...getHeaderProps({
        ref,
        ariaLevel,
        accordionType,
        isExpanded,
        isFocused,
        onClick: composeEventHandler(onClick, onTriggerClick),
        onFocus: composeEventHandler(onFocus, onHeaderFocus),
        onBlur: composeEventHandler(onBlur, () => setIsFocused(false)),
      })}
    >
      <StyledRotateIcon isExpanded={isExpanded} isAnimated={isAnimated}>
        <ChevronDown />
      </StyledRotateIcon>
      {props.children}
    </StyledHeader>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

AccordionHeader.propTypes = {
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
