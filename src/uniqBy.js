import curry from "__curry__";

function* uniqBy(iteratee, iterable) {
  const set = new Set();
  for (const element of iterable) {
    const mapped = iteratee(element);
    if (!set.has(mapped)) {
      set.add(mapped);
      yield element;
    }
  }
}

export default curry(uniqBy);
