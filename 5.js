// Solution from Codewars.
function nextPal(val) {
  for (var i = val + 1; ; i++) {
    var str = i + "";
    if (str.split("").reverse().join("") == str) return i;
  }
}
