import curry from "__curry__";
import iter from "./iter.js";

const reduce = (reducer, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let accumulator = value;
  for (const element of iterator) {
    accumulator = reducer(accumulator, element);
  }
  return accumulator;
};

export default curry(reduce);
