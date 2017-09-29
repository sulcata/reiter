import curry from "__curry__";

/**
 * Calls `iteratee` for each value of `iterable`. `iteratee` takes one
 * argument: (value).
 *
 * @since 0.0.1
 * @curried
 * @param {function} iteratee Invoked per value.
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {void}
 * @example
 *
 * reiter.forEach(a => console.log(a), [1, 2, 3])
 * // => 1
 * // => 2
 * // => 3
 */
const forEach = (iteratee, iterable) => {
  for (const value of iterable) {
    iteratee(value);
  }
};

export default curry(forEach);
