import { HTMLProps, useCallback, useState } from 'react';
import { useUIDSeed } from 'react-uid';
import callAllFunction from './utils/callAllFunction';
import KEYS from './utils/KEYCODES';

export interface IUseAccordionProps {
  idPrefix?: string;
  onChange?: (index: number) => void;
}

export interface IHeaderProps extends HTMLProps<any> {
  role?: any;
  ariaLevel?: number;
}

export interface IButtonTriggerProps extends HTMLProps<any> {
  index?: number;
  role?: any;
  tabIndex?: number;
}

export interface IPanelProps extends HTMLProps<any> {
  role?: any;
  index?: number;
}

export interface IUseAccordionPropGetters {
  getHeaderProps: <T>(options?: T & IHeaderProps) => any;
  getButtonTriggerProps: <T>(options?: T & IButtonTriggerProps) => any;
  getPanelProps: <T>(options?: T & IPanelProps) => any;
}

export interface IUseAccordionReturnValue extends IUseAccordionPropGetters {
  expandedSection?: number;
}

export function useAccordion({
  idPrefix,
  onChange,
}: IUseAccordionProps = {}): IUseAccordionReturnValue {
  const seed = useUIDSeed();
  const [prefix] = useState<string>(idPrefix || seed('accordion'));
  const [expanded, setExpanded] = useState<number | undefined>(0);
  const triggerId = `${prefix}--trigger`;
  const panelId = `${prefix}--panel`;

  // handle toggle accordion onClick
  const toggle = useCallback(
    (index: number) => {
      setExpanded(() => {
        if (expanded !== index) return index;
        return undefined;
      });

      if (onChange) {
        onChange(index);
      }
    },
    [expanded, setExpanded, onChange],
  );

  const getHeaderProps = ({
    role = 'heading',
    ariaLevel,
    ...props
  }: IHeaderProps = {}) => {
    if (ariaLevel === undefined) {
      throw new Error(
        'Accessibility Error: You must provide an `ariaLevel` for <Header /> to consume',
      );
    }

    return {
      role,
      'aria-level': ariaLevel,
      ...props,
    };
  };

  const getButtonTriggerProps = ({
    index,
    role = 'button',
    tabIndex = 0,
    ...props
  }: IButtonTriggerProps = {}) => {
    if (index === undefined) {
      throw new Error(
        'Accessibility Error: You must provide an `index` option to `getButtonTriggerProps()`',
      );
    }

    const isExpanded = expanded === index;

    return {
      id: `${triggerId}:${index}`,
      role,
      tabIndex,
      'aria-expanded': isExpanded,
      'aria-controls': `${panelId}:${index}`,
      // may change in the future
      'aria-disabled': false,
      onClick: callAllFunction(() => toggle(index), props.onClick),
      onKeyDown: callAllFunction(props.onKeyDown, (event: KeyboardEvent) => {
        if (event.key === KEYS.ENTER || event.key === KEYS.SPACE) {
          toggle(index);
          event.preventDefault();
        }
      }),
      ...props,
    };
  };

  const getPanelProps = ({
    role = 'region',
    index,
    ...props
  }: IPanelProps = {}) => {
    if (index === undefined) {
      throw new Error(
        'Accessibility Error: You must provide an `index` option to `getPanelProps()`',
      );
    }

    return {
      id: `${panelId}:${index}`,
      role,
      'aria-labelledby': `${triggerId}:${index}`,
      ...props,
    };
  };

  // return here
  return {
    getHeaderProps,
    getButtonTriggerProps,
    getPanelProps,
    expandedSection: expanded,
  };
}
