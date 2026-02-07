
const tools = require("./strringutils");
const array = require("./arrayutills");
const numbers = require("./numberutills");
 ///for string
console.log(tools.normalizewhitespace("  hello   world "));
console.log(tools.tocamelcase("hello world test"));
console.log(tools.tosnakeCase("Hello World"));
console.log(tools.isvalidemail("test@gmail.com"));
console.log(tools.isvalidUrl("https://google.com"));

// for arrays
console.log(array.removeduplicate([1, 2, 2, 3]));


console.log(array.removeduplicate(["a", "a", "b", "c"]));


console.log(array.removeduplicate([]));


console.log(array.flattenarray([1, [2, 3], 4]));


console.log(array.flattenarray([1, 2, 3]));


console.log(array.flattenarray([[1, 2], [3, 4]]));

console.log(array.getstatus([10, 20, 30]));


console.log(array.getstatus([5]));
   //for number

console.log(numbers.clamp(5, 0, 10));

console.log(numbers.clamp(-3, 0, 10));

console.log(numbers.range(1, 5));

console.log(numbers.range(0, 3));

