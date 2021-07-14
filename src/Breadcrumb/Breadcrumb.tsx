import React, {
  Children,
  cloneElement,
  forwardRef,
  FunctionComponent,
  RefAttributes,
} from 'react';
import { useBreadcrumb } from '../hooks';
import { StyledBreadcrumb } from './StyledBreadcrumb';
import { StyledBreadcrumbItem } from './StyledBreadcrumbItem';

export const Breadcrumb: FunctionComponent<RefAttributes<any>> = forwardRef(
  (props, ref) => {
    const { getContainerProps, getCurrentPageProps } = useBreadcrumb();

    const childrenCount = Children.count(props.children);
    const shouldCollapsed = childrenCount > 4;

    const childrenMapped = Children.map(props.children, (child, index) => {
      const isLastItem = index === childrenCount - 1;

      if (isLastItem) {
        return (
          <StyledBreadcrumbItem>
            {cloneElement(child as any, getCurrentPageProps())}
          </StyledBreadcrumbItem>
        );
      }

      return <StyledBreadcrumbItem>{child}</StyledBreadcrumbItem>;
    });

    // console.log('mapped', childrenMapped);
    // console.log('count', childrenCount);

    return (
      <nav ref={ref} {...getContainerProps({ role: null, ...props } as any)}>
        <StyledBreadcrumb isCollapsible={shouldCollapsed}>
          {childrenMapped}
        </StyledBreadcrumb>
      </nav>
    );
  },
);

Breadcrumb.displayName = 'Breadcrumb';
