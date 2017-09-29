import curry from "__curry__";
import tee from "./tee.js";

/**
 * Yields all r-combinations with replacement of a `set`. Ordered pairs are
 * yielded in lexicographical order with respect to the iteration order.
 *
 * @since 0.0.1
 * @curried
 * @param {number} r The length of the combinations.
 * @param {Iterable|Iterator} set The set of elements.
 * @returns {Iterator} All r-combinations with replacement of `set`.
 * @example
 *
 * reiter.combinationsWithReplacement(2, [1, 2, 3])
 * // => [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3]
 */
function* combinationsWithReplacement(r, set) {
  if (r === 0) {
    yield [];
  } else {
    let [iterator, prevIterator] = tee(2, set);
    let result = iterator.next();
    let prevInUseIterator;
    while (!result.done) {
      const value = result.value;
      [prevIterator, prevInUseIterator] = tee(2, prevIterator);
      const c = combinationsWithReplacement(r - 1, prevInUseIterator);
      for (const tuple of c) {
        tuple.unshift(value);
        yield tuple;
      }
      prevIterator.next();
      result = iterator.next();
    }
  }
}

export default curry(combinationsWithReplacement);
