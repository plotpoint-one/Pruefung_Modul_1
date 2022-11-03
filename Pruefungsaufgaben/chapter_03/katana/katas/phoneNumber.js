function createPhoneNumber(numbers) {
  const countryCode = ["("];
  for (i = 0; i <= 2; i++) {
    countryCode.push(numbers[i]);
  }
  countryCode.push(") ");
  for (i = 3; i <= 5; i++) {
    countryCode.push(numbers[i]);
  }
  countryCode.push("-");
  for (i = 6; i <= 10; i++) {
    countryCode.push(numbers[i]);
  }
  let phoneNumber = countryCode.join("");
  return phoneNumber;
}

phoneNumber = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
