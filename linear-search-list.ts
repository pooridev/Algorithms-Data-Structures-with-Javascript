export const linearSearch = (haystack: number[], needle: number): boolean => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }
  return false;
};

console.log(linearSearch([1, 2, 3], 2)); // true
console.log(linearSearch([1, 2, 3], 5)); // false
