'use strict';

//function expression
const age = function(birth){
    return 2021-birth;
}
console.log(age(1998));

//arrow function - Doesn;t have 'this' attribute, hence use function()
const age1 = birth => 2021-birth;
console.log(age1(1998));

//object
const sand = {
    name: 'Sanidhya',
    year: 1998,
    job: 'Product Intern',
    hasLicense: true,
    retirementAge: function() {
        const age = 2021-this.year;
        return 65-age;
    },
    desc: function() {
        return `This is ${this.name}. He was born in ${this.year}. He has job as ${this.job} but will retire in ${this.retirementAge()}, and he ${this.hasLicense?'has':'doesn\'t has'} a license`;
    },
};

console.log(sand.desc()); 