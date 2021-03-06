/** @module reiter/cartesianAll */

import map from "./map.js";
import tee from "./tee.js";
import unzip from "./unzip.js";

const splitIterables = iterables => unzip(map(tee(2), iterables));

function* _cartesianAll(sets) {
  if (sets.length === 1) {
    yield* map(Array.of, sets[0]);
  } else if (sets.length > 1) {
    let inUseSets;
    const set = sets.shift();
    for (const value of set) {
      [sets, inUseSets] = splitIterables(sets);
      for (const tuple of _cartesianAll(inUseSets)) {
        tuple.unshift(value);
        yield tuple;
      }
    }
  }
}

/**
 * Yields the cartesian product of every set in `sets`. Ordered pairs are
 * yielded in lexicographical order according to the iteration order.
 *
 * @since 0.0.1
 * @generator
 * @function cartesianAll
 * @param {ForOfIterable<ForOfIterable>} sets The list of sets.
 * @yields {Array} The next ordered pair in the cartesian product of `sets`.
 * @see [cartesian]{@link module:reiter/cartesian}
 * @example
 *
 * reiter.cartesianAll([[1, 2], [3, 4], [5, 6]])
 * // => [1, 3, 5], [1, 3, 6], [1, 4, 5], [1, 4, 6]
 * //    [2, 3, 5], [2, 3, 6], [2, 4, 5], [2, 4, 6]
 */
export default sets => _cartesianAll([...sets]);
