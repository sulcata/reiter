/** @module reiter/count */

import curry from "__curry__";

/**
 * Yields a list of numbers counting from `start` by `step`. `step` can be
 * negative.
 *
 * @since 0.0.1
 * @generator
 * @function count
 * @param {number} start The first number yielded.
 * @param {number} step The step by which to count.
 * @yields {number} The next number in the sequence.
 * @example
 *
 * reiter.count(0, 2)
 * // => 0, 2, 4, 6, 8, ...
 */
export default curry(function*(start, step) {
  let current = start;
  for (;;) {
    yield current;
    current += step;
  }
});
