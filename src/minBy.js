import curry from "__curry__";
import iter from "./iter.js";

const minBy = (iteratee, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let min = value;
  let iterateeMin = iteratee(min);
  for (const value of iterator) {
    const iterateeValue = iteratee(value);
    if (iterateeValue < iterateeMin) {
      min = value;
      iterateeMin = iterateeValue;
    }
  }
  return min;
};

export default curry(minBy);
