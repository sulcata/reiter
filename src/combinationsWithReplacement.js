import curry from "__curry__";
import tee from "./tee.js";

function* combinationsWithReplacement(r, pool) {
  if (r === 0) {
    yield [];
  } else {
    let [iterator, prevIterator] = tee(2, pool);
    let result = iterator.next();
    let prevInUseIterator;
    while (!result.done) {
      const element = result.value;
      [prevIterator, prevInUseIterator] = tee(2, prevIterator);
      const c = combinationsWithReplacement(r - 1, prevInUseIterator);
      for (const tuple of c) {
        tuple.unshift(element);
        yield tuple;
      }
      prevIterator.next();
      result = iterator.next();
    }
  }
}

export default curry(combinationsWithReplacement);
