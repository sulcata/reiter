/** @module reiter/flow */

/**
 * Composes a list of functions, piping the output of
 * the previous into the next.
 *
 * @since 0.0.1
 * @function flow
 * @param {function[]} fns The function list.
 * @returns {function} The functional composition.
 * @example
 *
 * reiter.flow([(x, y) => x + y, x => 2 * x])(1, 2)
 * // => 6
 */
export default fns => {
  const initFn = fns.shift();
  return (...args) => {
    let value = initFn(...args);
    for (const fn of fns) {
      value = fn(value);
    }
    return value;
  };
};
