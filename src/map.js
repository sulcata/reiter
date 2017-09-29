import curry from "__curry__";

/**
 * Maps each value in `iterable` by running it through `iteratee`. `iteratee`
 * takes one argument: (value).
 *
 * @since 0.0.1
 * @curried
 * @param {function} iteratee Invoked per value.
 * @param {Iterable|Iterator} iterable The iterable.
 * @return {Iterator} The mapped iterable.
 * @example
 *
 * reiter.map(x => 2 * x, [1, 2, 3])
 * // => 2, 4, 6
 */
function* map(iteratee, iterable) {
  for (const value of iterable) {
    yield iteratee(value);
  }
}

export default curry(map);
