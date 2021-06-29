import React, {
  FocusEvent,
  FunctionComponent,
  MouseEvent,
  ReactNode,
  useState,
} from 'react';
import { useAccordionContext } from '../contexts/useAccordionContext';
import { useAccordionSectionContext } from '../contexts/useAccordionSectionContext';
import { StyledHeader } from './StyledHeader';
import { COMPONENT_ID as buttonBlinkId } from './StyledButtonLabel';
import callAllFunction from '../hooks/utils/callAllFunction';
import { StyledRotateIcon } from './StyledRotateIcon';
import { ChevronDown16 } from 'blinkicon';

export interface IAccordionHeaderProps {
  children?: ReactNode;
  onClick?: (event: MouseEvent<any>) => void;
  onFocus?: (event: FocusEvent<any>) => void;
  onBlur?: (event: FocusEvent<any>) => void;
}

export const AccordionHeader: FunctionComponent = ({
  onClick,
  onFocus,
  onBlur,
  ...props
}: IAccordionHeaderProps) => {
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
  const isExpanded = expandedSection === sectionIndex;

  const { onClick: onTriggerClick, onKeyDown } = getButtonTriggerProps({
    index: sectionIndex,
    type: 'button',
  });

  const onHeaderFocus = (event: FocusEvent) => {
    event.persist();

    setTimeout(() => {
      if (event.target.getAttribute('component-blink-id') === buttonBlinkId) {
        setIsFocused(true);
      }
    }, 0);
  };

  return (
    <StyledHeader
      {...getHeaderProps({
        ariaLevel,
        accordionType,
        isExpanded,
        isFocused,
        onClick: callAllFunction(onClick, onTriggerClick),
        onFocus: callAllFunction(onFocus, onHeaderFocus),
        onBlur: callAllFunction(onBlur, () => setIsFocused(false)),
      })}
    >
      <StyledRotateIcon isExpanded={isExpanded} isAnimated={isAnimated}>
        <ChevronDown16 />
      </StyledRotateIcon>
      {props.children}
    </StyledHeader>
  );
};
