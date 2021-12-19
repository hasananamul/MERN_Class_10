let pass = "p@_&$-!*";
let passPattern = /^[a-zA+Z0-9!@\-#$%^&*_]{8,}$/;
verifyPass = passPattern.test(pass);
console.log(`
${
  verifyPass == true
    ? "Your password is acceptable."
    : "Your password is Unacceptable !!!"
}
`);
