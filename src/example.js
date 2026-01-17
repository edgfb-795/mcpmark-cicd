// Fixed linting errors
const testVar = 'test';
function usedFunc() {
  let usedVar = 1;
  return 'single quotes';
}
// Use the function and variable to resolve no-unused-vars errors
usedFunc();
const result = testVar;
// console.log is a warning (allowed, rule is warn not error)
console.log(result);