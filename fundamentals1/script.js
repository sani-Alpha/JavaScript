const country = 'India', continent = 'Asia';
let population = '2 Billion';
console.log(`Country: ${country}`);
console.log(`Continent: ${continent}`);
console.log(`Population: ${population}`);

const isIsland = false;
let language;
console.log(`Island: ${isIsland}`);
console.log(`Population: ${population}`);
console.log(`Country: ${country}`);
console.log(`Language: ${language}`);

language = 'Hindi';
console.log('');

//coding challenge.
let mass = [7823,95];
let height = [1.95, 1.76];
let bmi = [];
for(let i=0;i<2;i++)
    bmi[i] = mass[i]/height[i]**2;

let markHigherBMI = bmi[0]>bmi[1]?true:false;
console.log(`Does Mark has higher BMI? => ${markHigherBMI}`);

//string template
console.log(`${country} lies in ${continent} ontinent and has a population of about ${population}`);

//prompt
let inp = Number(prompt('Enter a number'));
console.log(inp);