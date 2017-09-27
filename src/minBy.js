import curry from "__curry__";
import iter from "./iter.js";

const minBy = (iteratee, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let min = value;
  let iterateeMin = iteratee(min);
  for (const element of iterator) {
    const iterateeElement = iteratee(element);
    if (iterateeElement < iterateeMin) {
      min = element;
      iterateeMin = iterateeElement;
    }
  }
  return min;
};

export default curry(minBy);
