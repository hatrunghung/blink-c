import { HTMLProps, useCallback, useState } from 'react';
import { useUIDSeed } from 'react-uid';
import composeEventHandler from './utils/composeEventHandler';
import KEYS from './utils/KEYCODES';

export interface IUseAccordionProps {
  idPrefix?: string;
  onChange?: (index: number) => void;
  expandable?: boolean;
  collapsible?: boolean;
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
  expandedSection?: number[];
}

export function useAccordion({
  idPrefix,
  onChange,
  expandable = true,
  collapsible = true,
}: IUseAccordionProps = {}): IUseAccordionReturnValue {
  const seed = useUIDSeed();
  const [prefix] = useState<string>(idPrefix || seed('accordion'));
  const [expanded, setExpanded] = useState<number[] | undefined>([]);
  const triggerId = `${prefix}--trigger`;
  const panelId = `${prefix}--panel`;

  const toggle = useCallback(
    (index: number) => {
      const isExpanded = expanded.includes(index);

      if (!isExpanded) {
        if (expandable) {
          setExpanded(currentExpanded => currentExpanded.concat(index));
        } else {
          setExpanded(currentExpanded =>
            currentExpanded.slice(currentExpanded.length).concat(index),
          );
        }
      } else {
        if (collapsible) {
          const indexPosition = expanded.indexOf(index);
          setExpanded(currentExpanded =>
            currentExpanded
              .slice(0, indexPosition)
              .concat(currentExpanded.slice(indexPosition + 1)),
          );
        }
      }

      if (onChange) {
        onChange(index);
      }
    },
    [collapsible, expanded, setExpanded, expandable, onChange],
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

    const isExpanded = expanded.includes(index);
    const isDisabled = isExpanded && !collapsible;

    return {
      id: `${triggerId}:${index}`,
      role,
      tabIndex,
      'aria-expanded': isExpanded,
      'aria-controls': `${panelId}:${index}`,
      'aria-disabled': isDisabled,
      onClick: composeEventHandler(() => toggle(index), props.onClick),
      onKeyDown: composeEventHandler(
        props.onKeyDown,
        (event: KeyboardEvent) => {
          if (event.key === KEYS.ENTER || event.key === KEYS.SPACE) {
            event.preventDefault();
            toggle(index);
          }
        },
      ),
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
