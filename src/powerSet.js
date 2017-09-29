import chain from "./chain.js";
import cycle from "./cycle.js";
import iter from "./iter.js";
import map from "./map.js";
import repeatN from "./repeatN.js";
import unzip from "./unzip.js";

const nil = Symbol("reiter.powerSet.nil");
const removeNil = set => set.filter(value => value !== nil);

export default function* powerSet(pool) {
  const iterator = iter(pool);
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
