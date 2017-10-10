/** @module reiter/exclude */

import curry from "__curry__";
import filter from "./filter.js";

/**
 * Removes all values from `iterable` which equal a value from `values` by
 * [SameValueZero]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness}.
 *
 * @since 0.0.4
 * @generator
 * @function exclude
 * @param {ForOfIterable} values The values to exclude.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value from `iterable` which does not equal a value from `values`.
 * @see [include]{@link module:reiter/include}
 * @example
 *
 * reiter.exclude([-0, 1], [1, 2, 0, -1, 1, 3])
 * // => 2, -1, 3
 */
export default curry((values, iterable) => {
  const valueSet = new Set(values);
  return filter(value => !valueSet.has(value), iterable);
});
