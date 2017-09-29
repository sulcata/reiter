import curry from "__curry__";
import chain from "./chain.js";
import iter from "./iter.js";
import tee from "./tee.js";

function* permutations(r, pool) {
  if (r === 0) {
    yield [];
  } else {
    const usedValues = [];
    let iterator = iter(pool);
    let tempIterator;
    let { done, value } = iterator.next();
    if (done && r == null) {
      yield [];
    } else {
      while (!done) {
        [iterator, tempIterator] = tee(2, iterator);
        const inUseIterator = chain(usedValues, tempIterator);
        const p = permutations(r == null ? r : r - 1, inUseIterator);
        for (const tuple of p) {
          tuple.unshift(value);
          yield tuple;
        }
        usedValues.push(value);
        ({ done, value } = iterator.next());
      }
    }
  }
}

export default curry(permutations);
