let userName = "jewhhj87789988";
let uNamepattern = /^[a-zA-Z]{6,}[0-9]{2,}$/;
uNameResult = uNamepattern.test(userName);
console.log(`
${
  uNameResult == true
    ? "Your Username is valid."
    : "Your Usernmae is Invalid !!!"
}
`);
