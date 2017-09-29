import curry from "__curry__";

const reduceInto = (reducer, accumulator, iterable) => {
  for (const value of iterable) {
    accumulator = reducer(accumulator, value);
  }
  return accumulator;
};

export default curry(reduceInto);
