import map from "./map.js";
import tee from "./tee.js";
import unzip from "./unzip.js";

function* splitIterables(iterables) {
  yield* unzip(map(tee(2), iterables));
}

function* _cartesianAll(pools) {
  if (pools.length === 1) {
    yield* map(Array.of, pools[0]);
  } else if (pools.length > 1) {
    let inUsePools;
    const pool = pools.shift();
    for (const element of pool) {
      [pools, inUsePools] = splitIterables(pools);
      for (const tuple of _cartesianAll(inUsePools)) {
        tuple.unshift(element);
        yield tuple;
      }
    }
  }
}

export default function* cartesianAll(pools) {
  yield* _cartesianAll([...pools]);
}
