/** @module reiter/unzip */

import iter from "./iter.js";
import next from "./next.js";

/**
 * Returns `iterables` to its pre-zip configuration. Essentially `zip` taking
 * an arbitrary number of iterables. Ceases yielding after the first iterable
 * in `iterables` is exhausted.
 *
 * @since 0.0.1
 * @generator
 * @function unzip
 * @param {ForOfIterable<ForOfIterable>} iterables The iterables.
 * @yields {Iterator} The next set of regrouped elements.
 * @see [zip]{@link module:reiter/zip}
 * @example
 *
 * reiter.unzip([["a", 1], ["b", 2], ["c", 3]])
 * // => ["a", "b", "c"], [1, 2, 3]
 *
 * reiter.unzip([["a", 1], ["b", 2], ["c", 3, null]])
 * // => ["a", "b", "c"], [1, 2, 3]
 */
export default function*(iterables) {
  const iterators = [...iterables].map(iter);
  if (iterators.length > 0) {
    for (;;) {
      const values = [];
      for (const iterator of iterators) {
        const { done, value } = next(iterator);
        if (done) return;
        values.push(value);
      }
      yield values;
    }
  }
}
