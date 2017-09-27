import curry from "__curry__";

function* map(iteratee, iterable) {
  for (const element of iterable) {
    yield iteratee(element);
  }
}

export default curry(map);
