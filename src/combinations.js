import curry from "__curry__";
import iter from "./iter.js";
import tee from "./tee.js";

/**
 * Yields all r-combinations of `set`. Ordered pairs are yielded in
 * lexicographical order according to the iteration order.
 *
 * @since 0.0.1
 * @curried
 * @param {number} r The length of the combinations.
 * @param {Iterable|Iterator} set The set of elements.
 * @returns {Iterator} All r-combinations of `set`.
 * @example
 *
 * reiter.combinations(2, [1, 2, 3])
 * // => [1, 2], [1, 3], [2, 3]
 */
function* combinations(r, set) {
  if (r === 0) {
    yield [];
  } else {
    let iterator = iter(set);
    let inUseIterator;
    let { done, value } = iterator.next();
    while (!done) {
      [iterator, inUseIterator] = tee(2, iterator);
      for (const tuple of combinations(r - 1, inUseIterator)) {
        tuple.unshift(value);
        yield tuple;
      }
      ({ done, value } = iterator.next());
    }
  }
}

export default curry(combinations);
