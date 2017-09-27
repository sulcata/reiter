import curry from "__curry__";
import iter from "./iter.js";

function* accumulate(iteratee, iterable) {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return;
  let accumulation = value;
  yield accumulation;
  for (const element of iterator) {
    accumulation = iteratee(accumulation, element);
    yield accumulation;
  }
}

export default curry(accumulate);
