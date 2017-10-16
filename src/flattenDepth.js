/** @module reiter/flattenDepth */

import curry from "__curry__";
import isString from "./internal/isString.js";
import isIterable from "./isIterable.js";

function* _flattenDepth(n, iterable, visited) {
  if (n < 1) {
    yield* iterable;
  } else {
    for (const value of iterable) {
      if (isString(value)) {
        yield* value;
      } else if (isIterable(value)) {
        visited.add(value);
        yield* _flattenDepth(n - 1, value, visited);
        visited.delete(value);
      } else {
        yield value;
      }
    }
  }
}

/**
 * Flattens `iterable` up to `depth` times.
 *
 * @since 0.0.1
 * @generator
 * @function flattenDepth
 * @param {number} depth The number of times to flatten.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next element when traversing a `depth` flattened `iterable`.
 * @see [flatten]{@link module:reiter/flatten}
 * @see [flattenDeep]{@link module:reiter/flattenDeep}
 * @example
 *
 * reiter.flattenDepth(2, [1, [2], [3, [[[4]]]], [5, 6]])
 * // => 1, 2, 3, [4], 5, 6
 */
export default curry(
  /*
   * Cannot be a WeakSet as WeakSets do not hold strings.
   * A WeakSet wouldn't do anything anyhow. References are
   * held onto at least until manually deleted.
   */
  (depth, iterable) => _flattenDepth(depth, iterable, new Set())
);
