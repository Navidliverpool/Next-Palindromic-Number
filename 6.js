// Solution from Codewars.

// O(1) solution

// The idea is to split the number into two equal length parts
// and to increment / mirror the first half to product the next palindrome
function nextPal(val) {
  // `${val}` converts the parameter val value to string.
  let str = `${val}`,
    len = Math.ceil(str.length / 2),
    abc = str.slice(0, len),
    xyz = str.slice(-len),
    cba = [...abc].reverse().join("");
  // The + operator is the unary plus operator, which is used to convert a string or other data type to a number.
  // If the operand of + is a string, it tries to convert it to a number.
  // For example, +"123" will result in the number 123.
  // If the operand is already a number, it simply returns that number.
  if (+xyz >= +cba) abc = `${+abc + 1}`;
  xyz = [...abc]
    .reverse()
    // ignore the middle char for odd lengths + handle edge case 999 -> 1001
    .slice((str.length % 2) + abc.length - xyz.length)
    .join("");
  return +(abc + xyz);
}
