function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (i = 0; i <= arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sum = sum + 1;
    } else continue;
  }
  return sum;
  console.log(sum);
}

countSheeps([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  undefined,
  null,
  null,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]);
