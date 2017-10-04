/** @module reiter/includes */

import curry from "__curry__";
import sameValueZero from "./internal/sameValueZero.js";

/**
 * Checks if `value` is equal to any value in `iterable` by
 * [SameValueZero]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness}.
 *
 * @since 0.0.1
 * @function includes
 * @param {*} value The value to check for inclusion.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {boolean} `true` if any values equal `value`, else `false`.
 * @example
 *
 * reiter.includes(2, [1, 2, 3, 4])
 * // => true
 *
 * reiter.includes(NaN, [1, 2, 3, 4, NaN])
 * // => true
 *
 * reiter.includes(0, [1, 2, 3, 4, -0])
 * // => true
 *
 * reiter.includes(0, [1, 2, 3, 4])
 * // => false
 */
export default curry((value, iterable) => {
  for (const currentValue of iterable) {
    if (sameValueZero(currentValue, value)) return true;
  }
  return false;
});
