export default (iterator, n) => {
  let result;
  for (let i = 0; i < n; i++) {
    result = iterator.next();
    if (result.done) break;
  }
  return result;
};
