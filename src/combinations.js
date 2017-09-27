import curry from "__curry__";
import iter from "./iter.js";
import tee from "./tee.js";

function* combinations(r, pool) {
  if (r === 0) {
    yield [];
  } else {
    let iterator = iter(pool);
    let inUseIterator;
    let { done, value: element } = iterator.next();
    while (!done) {
      [iterator, inUseIterator] = tee(2, iterator);
      for (const tuple of combinations(r - 1, inUseIterator)) {
        tuple.unshift(element);
        yield tuple;
      }
      ({ done, value: element } = iterator.next());
    }
  }
}

export default curry(combinations);
