import curry from "__curry__";
import iter from "./iter.js";

const minWith = (comparator, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let min = value;
  for (const element of iterator) {
    if (comparator(element, min) < 0) {
      min = element;
    }
  }
  return min;
};

export default curry(minWith);
