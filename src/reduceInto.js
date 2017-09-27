import curry from "__curry__";

const reduceInto = (reducer, accumulator, iterable) => {
  for (const element of iterable) {
    accumulator = reducer(accumulator, element);
  }
  return accumulator;
};

export default curry(reduceInto);
