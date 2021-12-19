let zipCode = "SG-729660";
let zipPattern = /^[A-Z]*-[0-9]{6}$/;
let zipResult = zipPattern.test(zipCode);
console.log(`
${zipResult == true ? "Zip code is correct." : "Zip code is incorrect !!!"}

`);
