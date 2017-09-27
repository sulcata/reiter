import curry from "__curry__";
import iter from "./iter.js";

function* dropWhile(predicate, iterable) {
  const iterator = iter(iterable);
  for (const value of iterator) {
    if (!predicate(value)) {
      yield value;
      break;
    }
  }
  yield* iterator;
}

export default curry(dropWhile);
