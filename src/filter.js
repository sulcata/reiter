import curry from "__curry__";

function* filter(predicate, iterable) {
  for (const element of iterable) {
    if (predicate(element)) yield element;
  }
}

export default curry(filter);
