import curry from "__curry__";

const some = (predicate, iterable) => {
  for (const element of iterable) {
    if (predicate(element)) return true;
  }
  return false;
};

export default curry(some);
