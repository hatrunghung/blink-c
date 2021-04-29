import {
  useSelection,
  IUseSelectionProps,
  IUseSelectionState,
  IGetItemPropsOptions,
} from './useSelection';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUseButtonGroupProps<Item> extends IUseSelectionProps<Item> {}

export interface IUseButtonGroupPropGetters<Item> {
  getButtonGroupProps: <T>(options?: T) => T & React.HTMLProps<any>;
  getButtonProps: <T extends IGetItemPropsOptions<Item>>(
    options: T,
    propGetterName?: string,
  ) => any;
}

export type UseButtonGroupReturnValue<Item> = IUseSelectionState<Item> &
  IUseButtonGroupPropGetters<Item>;

export function useButtonGroup<Item = any>(
  options: IUseButtonGroupProps<Item>,
): UseButtonGroupReturnValue<Item> {
  const {
    focusedItem,
    selectedItem,
    getContainerProps,
    getItemProps,
  } = useSelection<Item>(options);

  function getButtonGroupProps({ role = 'group', ...props } = {}) {
    return {
      role,
      'data-container-id': 'containers.buttonGroup',
      ...props,
    };
  }
  function getButtonProps({
    role = 'button',
    selectedAriaKey = 'aria-pressed',
    ...props
  } = {}) {
    return {
      role,
      selectedAriaKey,
      ...props,
    };
  }

  return {
    focusedItem,
    selectedItem,
    getButtonGroupProps: props =>
      getContainerProps(getButtonGroupProps(props) as any),
    getButtonProps: props =>
      getItemProps(getButtonProps(props) as any, 'getButtonProps'),
  };
}
