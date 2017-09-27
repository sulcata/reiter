import curry from "__curry__";

const forEach = (iteratee, iterable) => {
  for (const element of iterable) {
    iteratee(element);
  }
};

export default curry(forEach);
