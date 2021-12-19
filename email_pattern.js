let email = "akon.mdhasan4454@gmail.com";
let emailPattern = /^[a-z0-9_.]{1,}@[a-z0-9-]{1,}\.[a-z]{1,}$/;
let verifyEmail = emailPattern.test(email);
console.log(`
${
  verifyEmail == true
    ? "You has entered a valid Email."
    : "You has entered a invalid Email !!!"
}
`);
