/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const callAllFunction = (...fns) => (...args) =>
  fns.forEach(fn => fn?.(...args));

export default callAllFunction;
