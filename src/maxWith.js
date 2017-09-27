import curry from "__curry__";
import iter from "./iter.js";

const maxWith = (comparator, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let max = value;
  for (const element of iterator) {
    if (comparator(element, max) > 0) {
      max = element;
    }
  }
  return max;
};

export default curry(maxWith);
