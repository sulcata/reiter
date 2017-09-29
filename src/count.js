import curry from "__curry__";

/**
 * Yields a list of numbers counting from `start` by `step`. `step` can be
 * negative.
 *
 * @since 0.0.1
 * @curried
 * @param {number} start The first number yielded.
 * @param {number} step The step by which to count.
 * @returns {Iterator} A list of numbers counting from `start` by `step`.
 * @example
 *
 * reiter.count(0, 2)
 * // => 0, 2, 4, 6, 8, ...
 */
function* count(start, step) {
  let current = start;
  for (;;) {
    yield current;
    current += step;
  }
}

export default curry(count);
