import curry from "__curry__";
import iter from "./iter.js";

const maxBy = (iteratee, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let max = value;
  let iterateeMax = iteratee(max);
  for (const element of iterator) {
    const iterateeElement = iteratee(element);
    if (iterateeElement > iterateeMax) {
      max = element;
      iterateeMax = iterateeElement;
    }
  }
  return max;
};

export default curry(maxBy);
