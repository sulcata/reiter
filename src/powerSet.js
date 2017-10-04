/** @module reiter/powerSet */

import chain from "./chain.js";
import cycle from "./cycle.js";
import iter from "./iter.js";
import map from "./map.js";
import repeatN from "./repeatN.js";
import unzip from "./unzip.js";

const nil = Symbol("reiter.powerSet.nil");
const removeNil = set => set.filter(value => value !== nil);

/**
 * Yields the power set, or all subsets, of `set`.
 *
 * @since 0.0.1
 * @generator
 * @function powerSet
 * @param {ForOfIterable} set The set of elements.
 * @yields {Array} The next subset of `set` in the power set.
 * @example
 *
 * reiter.powerSet([1, 2])
 * // => [], [1], [2], [1, 2]
 */
export default function*(set) {
  const iterator = iter(set);
  const values = [];
  let n = 1;
  yield [];
  for (const value of iterator) {
    const cycleChains = values.map((value, idx) =>
      cycle(chain(repeatN(2 ** idx, nil), repeatN(2 ** idx, value)))
    );
    cycleChains.push(repeatN(n, value));
    yield* map(removeNil, unzip(cycleChains));
    n *= 2;
    values.push(value);
  }
}
