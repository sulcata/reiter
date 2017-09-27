import curry from "__curry__";

const every = (predicate, iterable) => {
  for (const element of iterable) {
    if (!predicate(element)) return false;
  }
  return true;
};

export default curry(every);
