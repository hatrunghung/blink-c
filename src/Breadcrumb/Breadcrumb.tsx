import React, {
  Children,
  cloneElement,
  forwardRef,
  FunctionComponent,
  ReactElement,
  RefAttributes,
} from 'react';
import { useBreadcrumb } from '../hooks';
import { StyledBreadcrumb } from './StyledBreadcrumb';
import { StyledBreadcrumbItem } from './StyledBreadcrumbItem';

export const Breadcrumb: FunctionComponent<
  RefAttributes<HTMLElement>
> = forwardRef((props, ref) => {
  const { containerProps, currentPageProps } = useBreadcrumb();

  const childrenCount = Children.count(props.children);

  const childrenMapped = Children.map(props.children, (child, index) => {
    const isLastItem = index === childrenCount - 1;

    if (isLastItem) {
      return (
        <StyledBreadcrumbItem>
          {cloneElement(child as ReactElement<any>, currentPageProps)}
        </StyledBreadcrumbItem>
      );
    }

    return <StyledBreadcrumbItem>{child}</StyledBreadcrumbItem>;
  });

  return (
    <nav ref={ref} {...containerProps}>
      <StyledBreadcrumb>{childrenMapped}</StyledBreadcrumb>
    </nav>
  );
});

Breadcrumb.displayName = 'Breadcrumb';
