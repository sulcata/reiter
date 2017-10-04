/** @module reiter/uniqWith */

import curry from "__curry__";

/**
 * Yields a duplicate-free version of `iterable`. Two values are duplicates
 * if they are equal by `equalityTest`. `equalityTest` is invoked with two
 * arguments, (value1, value2), and returns `true` if the two values are equal.
 *
 * @since 0.0.1
 * @generator
 * @function uniqWith
 * @param {function} equalityTest Checks two values for equality.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next non-duplicate value in `iterable`.
 * @see [uniq]{@link module:reiter/uniq}
 * @see [uniqBy]{@link module:reiter/uniqBy}
 * @example
 *
 * reiter.uniqWith((x, y) => x === y, [1, 0, 1, 1, -0, 1, 1, NaN, NaN])
 * // => 1, 0, NaN, NaN
 */
export default curry(function*(equalityTest, iterable) {
  const previousValues = [];
  outer: for (const value of iterable) {
    for (const previousValue of previousValues) {
      if (equalityTest(value, previousValue)) {
        continue outer;
      }
    }
    previousValues.push(value);
    yield value;
  }
});
