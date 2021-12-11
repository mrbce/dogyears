// This is my age in human years
const myAge = 24;
// This variable will change
let earlyYears = 2;
earlyYears *= 10.5;
// The below is counteracting the 2 from earlyYears
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// This calculates my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
// This is my name in lowercase
const myName = `Ben`.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
