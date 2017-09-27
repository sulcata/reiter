export default pairs => {
  const object = {};
  for (const [key, value] of pairs) {
    object[key] = value;
  }
  return object;
};
