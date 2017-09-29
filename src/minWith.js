import curry from "__curry__";
import iter from "./iter.js";

const minWith = (comparator, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let min = value;
  for (const value of iterator) {
    if (comparator(value, min) < 0) {
      min = value;
    }
  }
  return min;
};

export default curry(minWith);
