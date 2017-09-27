export default fns => {
  const initFn = fns.shift();
  return (...args) => {
    let value = initFn(...args);
    for (const fn of fns) {
      value = fn(value);
    }
    return value;
  };
};
