import curry from "__curry__";

/**
 * Skips all values in `iterable` for which predicate returns a falsey value.
 * `predicate` takes one argument: (value)
 *
 * @since 0.0.1
 * @curried
 * @param {function} predicate Invoked per value.
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} `iterable` with values removed according to `predicate`.
 * @example
 *
 * reiter.filter(n => n % 2, [1, 2, 3, 4])
 * // => 1, 3
 */
function* filter(predicate, iterable) {
  for (const value of iterable) {
    if (predicate(value)) yield value;
  }
}

export default curry(filter);
