// This file has intentional linting errors
const testVar = "test" // Missing semicolon, double quotes
console.log(testVar); // console is a warning (rule: no-console)
function unusedFunc() { // Unused function (rule: no-unused-vars)
  let unusedVar = 1; // Unused variable (rule: no-unused-vars)
  return "double quotes" // Missing semicolon, double quotes
}