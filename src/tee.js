/** @module reiter/tee */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

function* generator(copy, copies, iterator) {
  for (;;) {
    if (copy.length === 0) {
      const { done, value } = next(iterator);
      if (done) break;
      for (const c of copies) {
        c.push(value);
      }
    }
    yield copy.shift();
  }
}

/**
 * Creates `n` copies of `iterable`. Iterators will be consumed. Unlike
 * [reiter]{@link module:reiter/reiter}, multiple, single-use copies
 * are produced.
 *
 * Each copy will not hold on to references to values after they have been
 * yielded. This allows for individual values to be garbage collected
 * regardless of if the iterator copies themselves have been garbage collected.
 *
 *
 * @since 0.0.1
 * @function tee
 * @param {number} n The number of copies.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {Iterator[]} `n` copies of `iterable`.
 * @see [reiter]{@link module:reiter/reiter}
 * @example
 *
 * const [iterator1, iterator2] = reiter.tee(reiter.iter([1, 2, 3]))
 * iterator1
 * // => 1, 2, 3
 * iterator2
 * // => 1, 2, 3
 */
export default curry((n, iterable) => {
  const iterator = iter(iterable);
  const copies = Array(n)
    .fill(null)
    .map(() => []);
  return copies.map(copy => generator(copy, copies, iterator));
});
