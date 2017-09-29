import curry from "__curry__";

/**
 * Yields the cartesian product of `set1` and `set2`. Ordered pairs are
 * yielded in lexicographical order according to the iteration order.
 *
 * @since 0.0.1
 * @curried
 * @param {Iterable|Iterator} set1 The first set of elements.
 * @param {Iterable|Iterator} set2 The second set of elements.
 * @returns {Iterator} All ordered pairs between `set1` and `set2`.
 * @example
 *
 * reiter.cartesian("abc", [1, 2, 3])
 * // => ["a", 1], ["a", 2], ["a", 3],
 * //    ["b", 1], ["b", 2], ["b", 3],
 * //    ["c", 1], ["c", 2], ["c", 3]
 */
function* cartesian(set1, set2) {
  for (const value1 of set1) {
    for (const value2 of set2) {
      yield [value1, value2];
    }
  }
}

export default curry(cartesian);
