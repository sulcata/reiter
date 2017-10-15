/** @module reiter/reiter */

import iter from "./iter.js";
import next from "./next.js";

const privateData = new WeakMap();

class Reiterable {
  constructor(iterable) {
    privateData.set(this, {
      iterator: iter(iterable),
      head: { next: null }
    });
  }

  *[Symbol.iterator]() {
    const $this = privateData.get(this);
    const iterator = $this.iterator;
    let node = $this.head;
    for (;;) {
      if (node.next === null) {
        const { done, value } = next(iterator);
        if (done) break;
        node.next = { next: null, value };
      }
      node = node.next;
      yield node.value;
    }
  }
}

/**
 * Casts an iterable to a `Reiterable` object, which is guaranteed to be
 * lazily evaluated and able to be iterated multiple times. Unlike
 * [tee]{@link module:reiter/tee}, a single iterable object is produced,
 * rather than multiple single-use iterators.
 *
 * The `Reiterable` will hold on to references even after they are yielded.
 * This means that the values cannot be garbage collected until the
 * containing `Reiterable` is garbage collected.
 *
 * @since 0.0.1
 * @function reiter
 * @param {ForOfIterable} iterable The iterable.
 * @returns {Reiterable} The iterable cast as a `Reiterable`.
 * @see [tee]{@link module:reiter/tee}
 * @example
 *
 * reiter.reiter([1, 2, 3])
 * // => 1, 2, 3
 *
 * const iterator = reiter.iter([1, 2, 3])
 * const reiterable = reiter.reiter(iterator)
 * reiter.chain(reiterable, reiterable)
 * // => 1, 2, 3, 1, 2, 3
 */
export default iterable =>
  privateData.has(iterable) ? iterable : new Reiterable(iterable);
