// This solution passed all tests. Written by me.

// allEqual returns true if all elements of (arrayOfDigits) are the same.
// I removed it from the code as The function doesn't need this code anymore, but I tought it may be better to keep it instead of removing it.
// const allEqual = (arrayOfDigits) =>
// arrayOfDigits.every((v) => v === arrayOfDigits[0]);

// nextPal return the final result.
function nextPal(val) {
  // arrayOfDigits convert the val to an array.
  // Again I removed it from the code as The function doesn't need this code anymore, but I tought it may be better to keep it instead of removing it.
  // const arrayOfDigits = Array.from(String(val), Number);
  // if (allEqual(arrayOfDigits)) {
  //   val++;
  // }

  // Here we check if val is already a palindrome number. So we increement val by one because we need to find the greater number which is the anext palindrome number.
  let input2 = val;
  let nextpalindrm1 = reversedNum(input2);
  if (nextpalindrm1 == val) {
    val++;
  }

  // Inside the while loop we take the input and put it in reversedNum function.
  while (true) {
    let input = val;
    let nextpalindrm = reversedNum(input);
    // In this if statement we compare nextpalindrm variable's value to the original val. if they are the same return the val, if not increase vall by one.
    if (val == nextpalindrm) {
      return val;
    }
    val++;
  }
}

// reversedNum function reverse it's input parameter.
function reversedNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
console.log(nextPal(191));
