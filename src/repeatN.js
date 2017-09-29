import curry from "__curry__";

function* repeatN(n, value) {
  for (let i = 0; i < n; i++) {
    yield value;
  }
}

export default curry(repeatN);
