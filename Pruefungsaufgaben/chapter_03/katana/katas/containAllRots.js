function containAllRots(strng, arr) {
  //let stng;
  const stngRots = [];

  //console.log(arr.length);

  for (i = 0; i < strng.length; i++) {
    let str = strng.slice(0, 1);
    strng = strng.replace(str, "");
    strng = strng + str;
    stngRots.push(strng);
  }

  var uniqueStrngRots = [...new Set(stngRots)];
  console.log(uniqueStrngRots);

  for (i = 0; i <= arr.length; i++) {
    if (uniqueStrngRots.includes(arr[i])) {
      let index = uniqueStrngRots.indexOf(arr[i]);
      uniqueStrngRots.splice(index, 1);
    }
  }
  if (uniqueStrngRots.length > 0) {
    return false;
  } else return true;
}

//console.log(containAllRots());

let answer = containAllRots("12341234", [
  "23412341",
  "34123412",
  "41234123",
  "12341234",
]);

console.log(answer);
