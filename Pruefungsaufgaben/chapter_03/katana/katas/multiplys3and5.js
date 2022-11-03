function solution(number) {
  const arrModThreeAndFive = [];
  var sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arrModThreeAndFive.push(i);
      sum = sum + i;
    }
  }
  console.log(arrModThreeAndFive);
  console.log(sum);
}

sum = solution(10);
