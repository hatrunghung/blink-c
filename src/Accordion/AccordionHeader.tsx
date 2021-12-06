import React, { FocusEvent, forwardRef, HTMLAttributes, useState } from 'react';
import PropTypes from 'prop-types';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { useAccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledHeader } from './styles/StyledHeader';
import { COMPONENT_ID as buttonBlinkId } from './styles/StyledButtonLabel';
import { StyledRotateIcon } from './styles/StyledRotateIcon';
import composeEventHandler from '../hooks/utils/composeEventHandler';
import { ChevronDown } from 'blinkicon';

const AccordionHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ onClick, onFocus, onBlur, ...props }, ref) => {
  const {
    level: ariaLevel,
    accordionSize,
    expandedSection,
    getHeaderProps,
    getButtonTriggerProps,
  } = useAccordionContext();

  const { sectionIndex, isDisabled } = useAccordionSectionContext();
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
        accordionSize,
        isExpanded,
        isFocused,
        isDisabled,
        onClick: composeEventHandler(onClick, onTriggerClick),
        onFocus: composeEventHandler(onFocus, onHeaderFocus),
        onBlur: composeEventHandler(onBlur, () => setIsFocused(false)),
      })}
    >
      <StyledRotateIcon isRotated={isExpanded}>
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

export default AccordionHeader;
