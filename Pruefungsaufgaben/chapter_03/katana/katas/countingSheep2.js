function countPositivesSumNegatives(input) {
  var resultArr = [];
  var sumNegative = 0;
  var arrPositive = [];
  for (i = 0; i <= input.length; i++) {
    if (input[i] < 0) {
      sumNegative = sumNegative + parseInt(input[i]);
      //console.log(sumNegative);
    } else if (input[i] > 0) {
      arrPositive.push(input[i]);
    } else if (input[i] == 0) {
      continue;
    }
  }
  //console.log(arrPositive);

  resultArr = [arrPositive.length, sumNegative];
  console.log(resultArr);
  return resultArr;
}

resultArr = countPositivesSumNegatives([]);
console.log(resultArr);
