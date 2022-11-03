function addBinary(a, b) {
  let c = a + b;
  const result = c.toString(2);
  return result;
}

let c = addBinary(5, 2);
console.log(c);
