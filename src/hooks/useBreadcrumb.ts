import { HTMLProps } from 'react';

export interface IUseBreadCrumbReturnValue {
  getContainerProps: <T>(options?: T & HTMLProps<any>) => T & HTMLProps<any>;
  getCurrentPageProps: <T>(options?: T & HTMLProps<any>) => T & HTMLProps<any>;
}

export function useBreadcrumb(): IUseBreadCrumbReturnValue {
  const getContainerProps = ({ role, ...props }: HTMLProps<any> = {}): any => {
    return {
      'aria-label': 'Breadcrumb',
      role,
      ...props,
    };
  };

  const getCurrentPageProps = (props: HTMLProps<any> = {}): any => {
    return {
      'aria-current': 'page',
      ...props,
    };
  };

  return {
    getContainerProps,
    getCurrentPageProps,
  };
}
