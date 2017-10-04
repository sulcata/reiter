/** @module reiter/partition */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

/**
 * Yields groups of elements in the order they're found, based on the values
 * returned by `iteratee`. `iteratee` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @generator
 * @function partition
 * @param {function} iteratee Invoked per value.
 * @param {Iterator} iterator The iterator.
 * @yields {Iterator} The next group of elements.
 * @example
 *
 * reiter.partition(n => n % 2, [1, 2, 3, 4, 5, 6])
 * // => [1, 3, 5], [2, 4, 6]
 */
export default curry(function*(iteratee, iterable) {
  const iterator = iter(iterable);
  const partitions = new Map();
  const partitionsToYield = [];

  /** @private */
  function getPartition(mappedValue) {
    if (!partitions.has(mappedValue)) {
      const partition = [];
      partitions.set(mappedValue, partition);
      partitionsToYield.push([mappedValue, partitionGenerator(partition)]);
      return partition;
    }
    return partitions.get(mappedValue);
  }

  /** @private */
  function* partitionGenerator(partition) {
    for (;;) {
      if (partition.length === 0) {
        const { done, value } = next(iterator);
        if (done) break;
        const mappedValue = iteratee(value);
        getPartition(mappedValue).push(value);
      } else {
        yield partition.shift();
      }
    }
  }

  let { done, value } = next(iterator);
  while (!done) {
    const mappedValue = iteratee(value);
    getPartition(mappedValue).push(value);
    if (partitionsToYield.length > 0) {
      yield partitionsToYield.shift();
      yield* partitionsToYield;
      partitionsToYield.length = 0;
    }
    ({ done, value } = next(iterator));
  }
});
