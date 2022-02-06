export interface IUseBreadCrumbReturnValue {
  containerProps: {
    'aria-label': string;
  };
  currentPageProps: {
    'aria-current': string;
  };
}

// in this component, accessibility is the only "common ground" in most use cases
// so a collection of prop is more than enough, rather than prop getters
export function useBreadcrumb(): IUseBreadCrumbReturnValue {
  const containerProps = {
    'aria-label': 'Breadcrumb',
  };

  const currentPageProps = {
    'aria-current': 'page',
  };

  return {
    containerProps,
    currentPageProps,
  };
}
