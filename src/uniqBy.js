/** @module reiter/uniqBy */

import curry from "__curry__";

/**
 * Yields a duplicate-free version of `iterable`. Two values are duplicates
 * if their ranking criteria from `iteratee` are equal by
 * [SameValueZero]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness}.
 * `iteratee` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @generator
 * @function uniqBy
 * @param {function} iteratee Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next non-duplicate value in `iterable`.
 * @see [uniq]{@link module:reiter/uniq}
 * @see [uniqWith]{@link module:reiter/uniqWith}
 * @example
 *
 * reiter.uniqBy(x => 1 / x, [1, 0, 1, 1, -0, 1, 1, NaN, NaN])
 * // => 1, 0, -0, NaN
 */
export default curry(function*(iteratee, iterable) {
  const set = new Set();
  for (const value of iterable) {
    const mapped = iteratee(value);
    if (!set.has(mapped)) {
      set.add(mapped);
      yield value;
    }
  }
});
