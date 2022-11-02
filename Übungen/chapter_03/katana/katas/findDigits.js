var findDigit = function (num, nth) {
  const numArr = [];

  numString = num.toString();
  for (i = numString.length - 1; i >= 0; i--) {
    console.log(numArr[i]);
    numArr.push(numString[i]);
  }
  console.log(numArr);

  //console.log(numArr);

  if (num)
    if (num === NaN || nth === NaN) return 0;
    else if (nth <= 0) {
      return -1;
    } else if (nth > numString.length) {
      return 0;
    } else return numArr[nth - 1];
};

let digit = findDigit(-5673, 4);
//console.log(digit);
