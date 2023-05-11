// Solution from Codewars.
function nextPal(val) {
  for (let i = val + 1; ; i++) {
    if (i.toString() == [...i.toString()].reverse().join("")) {
      return i;
    }
  }
}
