import curry from "__curry__";

const find = (predicate, iterable) => {
  for (const element of iterable) {
    if (predicate(element)) return element;
  }
  return undefined;
};

export default curry(find);
