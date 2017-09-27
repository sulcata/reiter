import chain from "./chain.js";
import cycle from "./cycle.js";
import iter from "./iter.js";
import map from "./map.js";
import repeatN from "./repeatN.js";
import unzip from "./unzip.js";

const nil = Symbol("reiter.powerSet.nil");
const removeNil = set => set.filter(element => element !== nil);

export default function* powerSet(pool) {
  const iterator = iter(pool);
  const elements = [];
  let n = 1;
  yield [];
  for (const element of iterator) {
    const cycleChains = elements.map((element, idx) =>
      cycle(chain(repeatN(2 ** idx, nil), repeatN(2 ** idx, element)))
    );
    cycleChains.push(repeatN(n, element));
    yield* map(removeNil, unzip(cycleChains));
    n *= 2;
    elements.push(element);
  }
}
