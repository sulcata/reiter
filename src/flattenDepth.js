import curry from "__curry__";
import isIterable from "./isIterable.js";
import isString from "./internal/isString.js";

/** @private */
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
 * Flattens `iterable` given `depth`.
 *
 * @since 0.0.1
 * @curried
 * @param {number} depth The number of times to flatten.
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} `iterable` flattened.
 * @example
 *
 * reiter.flattenDepth(2, [1, [2], [3, [[[4]]]], [5, 6]])
 * // => 1, 2, 3, [4], 5, 6
 */
function* flattenDepth(depth, iterable) {
  // Cannot be a WeakSet as WeakSets do not hold strings.
  // A WeakSet wouldn't do anything anyhow. References are
  // held onto at least until manually deleted.
  yield* _flattenDepth(depth, iterable, new Set());
}

export default curry(flattenDepth);
