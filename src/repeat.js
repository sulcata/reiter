import curry from "__curry__";

function* repeat(element) {
  for (;;) yield element;
}

export default curry(repeat);
