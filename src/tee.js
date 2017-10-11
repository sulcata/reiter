/** @module reiter/tee */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

const copyToInfo = new WeakMap();

function* makeCopy(info) {
  let { baseIterator, node } = info;
  for (;;) {
    if (node.next === null) {
      const { done, value } = next(baseIterator);
      if (done) break;
      node.next = { next: null, value };
    }
    node = info.node = node.next;
    yield node.value;
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
  const baseIterator = iter(iterable);
  const emptyHead = { next: null };
  const baseInfo = copyToInfo.get(baseIterator) || {
    baseIterator,
    node: emptyHead
  };
  const copies = [];
  for (let i = 0; i < n; i++) {
    const info = Object.assign({}, baseInfo);
    const copy = makeCopy(info);
    copyToInfo.set(copy, info);
    copies.push(copy);
  }
  return copies;
});
