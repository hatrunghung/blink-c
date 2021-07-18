import React, { forwardRef, HTMLAttributes } from 'react';
import Close from './Close';
import {
  PresetColor,
  ArrayPresetColor,
  StatusColor,
  ArrayStatusColor,
} from './colorTypes';
import { StyledTag } from './StyledTag';
import { StyledTagIcon } from './StyledTagIcon';

export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  color?: 'basic' | StatusColor | PresetColor | string;
}

const Tag = forwardRef<HTMLDivElement, ITagProps>((props, ref) => {
  return (
    <StyledTag ref={ref} color={props.color}>
      {props.children}
    </StyledTag>
  );
});

Tag.displayName = 'Tag';

Tag.propTypes = {
  color: function (props, propName, componentName) {
    if (
      props[propName] !== 'basic' &&
      ArrayStatusColor.indexOf(props[propName]) === -1 &&
      ArrayPresetColor.indexOf(props[propName]) === -1 &&
      !/^#[0-9a-fA-F]{3,6}$/.test(props[propName])
    ) {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. The value' +
          props[propName] +
          '`is not valid. Must be a valid color code',
      );
    }
  },
};

Tag.defaultProps = {
  color: 'basic',
};

(Tag as any).Icon = StyledTagIcon;
(Tag as any).Close = Close;

export default Tag as React.ForwardRefExoticComponent<
  ITagProps & React.RefAttributes<HTMLDivElement>
> & {
  Icon: typeof StyledTagIcon;
  Close: typeof Close;
};
