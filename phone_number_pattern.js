let text = "+8801454567887";
let phonePattern = /^(01|8801|\+8801)[0-9]{9}$/;
veryfyNumber = phonePattern.test(text);
console.log(`
${
  veryfyNumber == true
    ? "Your phone number is correct."
    : "Your phone number is incorrect !!!"
}
`);
