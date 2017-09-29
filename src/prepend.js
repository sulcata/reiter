import curry from "__curry__";

function* prepend(value, iterable) {
  yield value;
  yield* iterable;
}

export default curry(prepend);
