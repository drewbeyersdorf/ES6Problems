// remember the arrow function operator simplifies the code, eliminating the need for curly brackets
const  myConcat = (arr1, arr2) => //if we were passing one argument then we wouldn't even need parenthesis
  arr1.concat(arr2); // notice we don't need brackets


console.log(myConcat([1, 2], [3, 4, 5]));