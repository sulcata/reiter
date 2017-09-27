export const placeholder = Symbol("reiter.placeholder");
const isPlaceholder = x => x === placeholder;

export default fn => {
  const arity = fn.length;
  const resolver = (...args) => {
    return (...newArgs) => {
      let localArgs = args.slice();
      for (let i = 0, len = localArgs.length; i < len; i++) {
        if (localArgs[i] === placeholder) {
          if (newArgs.length === 0) break;
          localArgs[i] = newArgs.shift();
        }
      }
      if (localArgs.length < arity) localArgs = localArgs.concat(newArgs);
      if (localArgs.length > arity) localArgs.length = arity;
      if (localArgs.length === arity && !localArgs.some(isPlaceholder)) {
        return fn(...localArgs);
      }
      return resolver(...localArgs);
    };
  };
  return resolver();
};
