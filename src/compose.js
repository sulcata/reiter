/** @module reiter/compose */

import reiter from "./reiter.js";
import next from "./next.js";

/**
 * Composes a list of functions, piping the output of the previous into
 * the next. An empty function list will create the identity function (x => x).
 *
 * @since 0.0.5
 * @function compose
 * @param {ForOfIterable<function>} fns The function list.
 * @returns {function} The functional composition.
 * @example
 *
 * reiter.compose([(x, y) => x + y, x => 2 * x])(1, 2)
 * // => 6
 */
export default fns => {
  const reiterableFns = reiter(fns);
  return (...args) => {
    for (const fn of reiterableFns) {
      args = [fn(...args)];
    }
    return args[0];
  };
};
