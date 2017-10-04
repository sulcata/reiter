/** @module reiter/reiter */

import iter from "./iter.js";
import next from "./next.js";

const privateData = new WeakMap();

/**
 * Saves the values of an `iterable` or `iterator` to allow
 * it to be iterated more than once.
 *
 * @since 0.0.1
 * @private
 * @class
 * @param {ForOfIterable} iterable The iterable.
 * @example
 *
 * const iterator = reiter.iter([1, 2, 3])
 * const reiterator = reiter.reiter(iterator)
 * reiter.chain(reiterator, reiterator)
 * // => 1, 2, 3, 1, 2, 3
 */
function Reiterable(iterable) {
  privateData.set(this, {
    iterator: iter(iterable),
    head: null
  });
}

const assureNode = (node, iterator) => {
  if (node !== null) return node;
  const { done, value } = next(iterator);
  return done ? null : { value, next: null };
};

/**
 * Yields the values of the iterable which the `Reiterable`
 * was constructed with.
 *
 * @since 0.0.1
 * @generator
 * @yields {*} The values of the underlying iterable.
 * @example
 *
 * [...reiter.reiter([1, 2, 3])]
 * // => [1, 2, 3]
 */
Reiterable.prototype[Symbol.iterator] = function*() {
  const $this = privateData.get(this);
  const iterator = $this.iterator;
  $this.head = assureNode($this.head, iterator);
  let current = $this.head;
  while (current) {
    yield current.value;
    current.next = assureNode(current.next, iterator);
    current = current.next;
  }
};

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
 * const reiterator = reiter.reiter(iterator)
 * reiter.chain(reiterator, reiterator)
 * // => 1, 2, 3, 1, 2, 3
 */
export default iterable =>
  privateData.has(iterable) ? iterable : new Reiterable(iterable);
