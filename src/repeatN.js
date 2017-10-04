/** @module reiter/repeatN */

import curry from "__curry__";

/**
 * Yields `value` repeated `n`-times.
 *
 * @since 0.0.1
 * @generator
 * @function repeatN
 * @param {number} n The number of repetitions.
 * @param {*} value The value.
 * @yields {*} `value` until `n` have been yielded.
 * @see [repeat]{@link module:reiter/repeat}
 * @example
 *
 * reiter.repeat(5, 1)
 * // => 1, 1, 1, 1, 1
 */
export default curry(function*(n, value) {
  for (let i = 0; i < n; i++) {
    yield value;
  }
});
