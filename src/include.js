/** @module reiter/include */

import curry from "__curry__";
import filter from "./filter.js";

/**
 * Includes only values from `iterable` which equal a value from `values` by
 * [SameValueZero]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness}.
 *
 * @since 0.0.4
 * @generator
 * @function include
 * @param {ForOfIterable} values The values to include.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value from `iterable` which equals a value from `values`.
 * @see [exclude]{@link module:reiter/exclude}
 * @example
 *
 * reiter.include([-0, 1], [1, 2, 0, -1, 1, 3])
 * // => 1, 0, 1
 */
export default curry((values, iterable) => {
  const valueSet = new Set(values);
  return filter(value => valueSet.has(value), iterable);
});
