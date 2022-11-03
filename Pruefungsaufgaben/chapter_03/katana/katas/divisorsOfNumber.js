function getDivisorsCnt(n) {
  let x = parseInt(n);
  let y = 0;
  console.log(x);
  for (i = 1; i <= n; i++) {
    if (x % i === 0) {
      y = y + 1;
    }
  }
  return y;
}

let result = getDivisorsCnt(12);
console.log(result);
