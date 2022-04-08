import { useEffect, useReducer } from 'react';
import KEYS from './utils/KEYCODES';
import composeEventHandler from './utils/composeEventHandler';
import getControlledValue from './utils/getControlledValue';

export interface IUseSelectionPropGetters<Item> {
  getContainerProps: <T>(options?: T) => T & React.HTMLProps<any>;
  getItemProps: <T extends IGetItemPropsOptions<Item>>(
    options: T,
    propGetterName?: string,
  ) => any;
}

export interface IUseSelectionState<Item> {
  focusedItem?: Item;
  selectedItem?: Item;
}

export interface IGetItemPropsOptions<Item> extends React.HTMLProps<any> {
  selectedAriaKey?: string;
  item: Item;
  focusRef?: React.RefObject<any>;
  refKey?: string;
}

export type UseSelectionReturnValue<Item> = IUseSelectionState<Item> &
  IUseSelectionPropGetters<Item>;

export interface IUseSelectionProps<Item> {
  direction?: 'horizontal' | 'vertical' | 'both';
  defaultFocusedIndex?: number;
  defaultSelectedIndex?: number;
  rtl?: boolean;
  selectedItem?: Item;
  focusedItem?: Item;
  onSelect?: (selectedItem: Item) => void;
  onFocus?: (focusedItem: Item) => void;
}

export type SELECTION_ACTION =
  | { type: 'FOCUS'; payload?: any }
  | {
      type: 'INCREMENT';
      payload: any;
    }
  | {
      type: 'DECREMENT';
      payload: any;
    }
  | { type: 'HOME'; payload: any }
  | { type: 'END'; payload: any }
  | {
      type: 'MOUSE_SELECT';
      payload: any;
    }
  | { type: 'KEYBOARD_SELECT'; payload: any }
  | { type: 'EXIT_WIDGET' };

function stateReducer(
  state: IUseSelectionState<any>,
  action: SELECTION_ACTION,
) {
  switch (action.type) {
    case 'END':
    case 'HOME':
    case 'FOCUS':
    case 'INCREMENT':
    case 'DECREMENT': {
      return { ...state, focusedItem: action.payload };
    }
    case 'KEYBOARD_SELECT': {
      return { ...state, selectedItem: action.payload };
    }
    case 'MOUSE_SELECT': {
      return { ...state, selectedItem: action.payload, focusedItem: undefined };
    }
    case 'EXIT_WIDGET': {
      return { ...state, focusedItem: undefined };
    }
    default:
      return state;
  }
}

export function useSelection<Item = any>({
  direction = 'horizontal',
  defaultFocusedIndex = 0,
  defaultSelectedIndex,
  rtl,
  selectedItem,
  focusedItem,
  onSelect,
  onFocus,
}: IUseSelectionProps<Item> = {}): UseSelectionReturnValue<Item> {
  const isSelectedItemControlled = selectedItem !== undefined;
  const isFocusedItemControlled = focusedItem !== undefined;
  const refs: React.MutableRefObject<any | null>[] = [];
  const items: Item[] = [];

  const [state, dispatch] = useReducer(stateReducer, {
    selectedItem,
    focusedItem,
  });

  const controlledFocusedItem = getControlledValue(
    focusedItem,
    state.focusedItem,
  );
  const controlledSelectedItem = getControlledValue(
    selectedItem,
    state.selectedItem,
  );

  useEffect(() => {
    if (controlledFocusedItem !== undefined) {
      const focusedIndex = items.indexOf(controlledFocusedItem);

      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      refs[focusedIndex] && refs[focusedIndex].current!.focus();
    }
  }, [controlledFocusedItem]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (selectedItem === undefined && defaultSelectedIndex !== undefined) {
      onSelect && onSelect(items[defaultSelectedIndex]);

      if (!isSelectedItemControlled) {
        dispatch({
          type: 'KEYBOARD_SELECT',
          payload: items[defaultSelectedIndex],
        });
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getContainerProps = ({ role = 'listbox', ...otherProps }) =>
    ({
      role,
      'data-blink-container-id': 'container.selection',
      ...otherProps,
    } as any);

  const getItemProps = (
    {
      role = 'option',
      selectedAriaKey = 'aria-selected',
      onFocus: onFocusCallback,
      onKeyDown,
      onClick,
      item,
      focusRef,
      refKey = 'ref',
      ...otherProps
    }: IGetItemPropsOptions<Item> = {} as any,
    propGetterName = 'getItemProps',
  ) => {
    if (item === undefined) {
      throw new Error(
        `Accessibility Error: Must provide an "item" option to "${propGetterName}()"`,
      );
    }

    if (focusRef === undefined) {
      throw new Error(
        `Accessibility Error: Must provide a "focusRef" option to "${propGetterName}()"`,
      );
    }

    refs.push(focusRef);
    items.push(item);

    const isSelected = controlledSelectedItem === item;
    const isFocused =
      controlledFocusedItem === undefined
        ? isSelected
        : controlledFocusedItem === item;
    const tabIndex =
      isFocused ||
      (controlledSelectedItem === undefined &&
        controlledFocusedItem === undefined &&
        items.indexOf(item) === defaultFocusedIndex)
        ? 0
        : -1;
    const verticalDirection = direction === 'vertical' || direction === 'both';
    const horizontalDirection =
      direction === 'horizontal' || direction === 'both';

    return {
      role,
      tabIndex,
      [selectedAriaKey]: selectedAriaKey ? isSelected : undefined,
      [refKey]: focusRef,
      onFocus: composeEventHandler(onFocusCallback, () => {
        onFocus && onFocus(item);

        if (!isFocusedItemControlled) {
          dispatch({ type: 'FOCUS', payload: item });
        }
      }),
      onClick: composeEventHandler(onClick, () => {
        onSelect && onSelect(item);
        onFocus && onFocus(item);

        if (!isSelectedItemControlled) {
          dispatch({ type: 'MOUSE_SELECT', payload: item });
        }
      }),
      onKeyDown: composeEventHandler(
        onKeyDown,
        (event: React.KeyboardEvent) => {
          let currentIndex: number;
          let nextIndex: number;

          if (isFocusedItemControlled) {
            currentIndex = items.indexOf(focusedItem as any);
          } else {
            currentIndex = items.indexOf(
              state.focusedItem || state.selectedItem,
            );
          }

          const onIncrement = () => {
            nextIndex = currentIndex + 1;

            if (currentIndex === items.length - 1) {
              nextIndex = 0;
            }

            !isFocusedItemControlled &&
              dispatch({ type: 'INCREMENT', payload: items[nextIndex] });

            onFocus && onFocus(items[nextIndex]);
          };

          const onDecrement = () => {
            nextIndex = currentIndex - 1;

            if (currentIndex === 0) {
              nextIndex = items.length - 1;
            }

            !isFocusedItemControlled &&
              dispatch({ type: 'DECREMENT', payload: items[nextIndex] });

            onFocus && onFocus(items[nextIndex]);
          };

          if (
            (event.key === KEYS.UP && verticalDirection) ||
            (event.key === KEYS.LEFT && horizontalDirection)
          ) {
            event.preventDefault();

            if (rtl && !verticalDirection) {
              onIncrement();
            } else {
              onDecrement();
            }
          } else if (
            (event.key === KEYS.DOWN && verticalDirection) ||
            (event.key === KEYS.RIGHT && horizontalDirection)
          ) {
            event.preventDefault();

            if (rtl && !verticalDirection) {
              onDecrement();
            } else {
              onIncrement();
            }
          } else if (event.key === KEYS.HOME) {
            event.preventDefault();
            if (!isFocusedItemControlled) {
              dispatch({ type: 'HOME', payload: items[0] });
            }

            onfocus && onFocus(items[0]);
          } else if (event.key === KEYS.END) {
            event.preventDefault();
            if (!isFocusedItemControlled) {
              dispatch({ type: 'END', payload: items[items.length - 1] });
            }

            onFocus && onFocus(items[items.length - 1]);
          } else if (event.key === KEYS.SPACE || event.key === KEYS.ENTER) {
            event.preventDefault();
            onSelect && onSelect(item);

            if (!isSelectedItemControlled) {
              dispatch({ type: 'KEYBOARD_SELECT', payload: item });
            }
          }
        },
      ),
      ...otherProps,
    } as any;
  };

  return {
    focusedItem: controlledFocusedItem,
    selectedItem: controlledSelectedItem,
    getContainerProps,
    getItemProps,
  };
}
