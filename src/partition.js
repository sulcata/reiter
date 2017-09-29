import curry from "__curry__";
import iter from "./iter.js";

function* partition(iteratee, iterable) {
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
        const { done, value } = iterator.next();
        if (done) break;
        const mappedValue = iteratee(value);
        getPartition(mappedValue).push(value);
      } else {
        yield partition.shift();
      }
    }
  }

  let { done, value } = iterator.next();
  while (!done) {
    const mappedValue = iteratee(value);
    getPartition(mappedValue).push(value);
    if (partitionsToYield.length > 0) {
      yield partitionsToYield.shift();
      yield* partitionsToYield;
      partitionsToYield.length = 0;
    }
    ({ done, value } = iterator.next());
  }
}

export default curry(partition);
