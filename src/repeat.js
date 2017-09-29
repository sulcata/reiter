import curry from "__curry__";

function* repeat(value) {
  for (;;) yield value;
}

export default curry(repeat);
