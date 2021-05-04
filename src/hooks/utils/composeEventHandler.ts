/**
 * @component
 *
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them calls
 * `event.preventDefault()`
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export default function composeEventHandler(...fns: (Function | undefined)[]) {
  return (event: any, ...args: any[]) => {
    return fns.some(fn => {
      fn && fn(event, ...args);

      return event && event.defaultPrevented;
    });
  };
}
