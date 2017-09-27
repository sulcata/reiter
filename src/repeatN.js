import curry from "__curry__";

function* repeatN(n, element) {
  for (let i = 0; i < n; i++) {
    yield element;
  }
}

export default curry(repeatN);
