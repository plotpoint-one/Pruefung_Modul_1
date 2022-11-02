function scramble(str1, str2) {
  var str1Arr = [];
  var str2Arr = [];

  str1Arr = str1.split("");
  str2Arr = str2.split("");

  let hasAllElems = true;
  var str3Arr = [];
  for (let i = str2Arr.length - 1; i >= 0; i--) {
    for (let j = str1Arr.length; j >= 0; j--) {
      if (str2Arr[i] == str1Arr[j]) {
        str3Arr.push(str1Arr.splice(j, 1));
        str2Arr.splice(i, 1);
        console.log(str2Arr);
      }
    }
  }
  if (str2Arr.length > 0) {
    return false;
  } else return true;
}

let result = scramble("javscripts", "javascript");
console.log(result);
