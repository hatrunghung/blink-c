import * as React from 'react';

export default function mergeRefs<T = any>(
  listRefs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>,
): React.RefCallback<T> {
  return function (value) {
    listRefs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref !== null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
