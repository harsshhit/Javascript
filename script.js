// Define a sample string
const sampleString = "Hello, World!";

// 1. Length of the string
console.log("1. Length of the string:", sampleString.length);

// 2. Convert to uppercase
console.log("2. Uppercase:", sampleString.toUpperCase());

// 3. Convert to lowercase
console.log("3. Lowercase:", sampleString.toLowerCase());

// 4. Extract a portion of the string
console.log("4. Extract a portion of the string:", sampleString.slice(7, 12));

// 5. Split the string into an array
console.log("5. Split the string into an array:", sampleString.split(","));

// 6. Find the index of a substring
console.log("6. Index of 'World':", sampleString.indexOf("World"));

// 7. Replace a substring
console.log(
  "7. Replace 'World' with 'Universe':",
  sampleString.replace("World", "Universe")
);

// 8. Check if the string includes a substring
console.log("8. Does it include 'Hello'?", sampleString.includes("Hello"));

// 9. Concatenate strings
const string1 = "Hello";
const string2 = "World";
console.log("9. Concatenate strings:", string1.concat(", ", string2, "!"));

// 10. Repeat the string
console.log("10. Repeat the string:", sampleString.repeat(2));
