import curry from "__curry__";

function* chain(iterable1, iterable2) {
  yield* iterable1;
  yield* iterable2;
}

export default curry(chain);
