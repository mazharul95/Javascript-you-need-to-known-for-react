const person = {
    name: 'korim chowdhury',
    profession:'traffic Surgeon',
    age:39,
    25: 'summer',
    'son-name':'Sunny',
    address:'banglamotor',
}
//dot notation
const prof1 = person.profession;
//console.log(prof1);

//bracket notation

const prof2 = person['profession'];
const pName = 'profession';
const prof3 = person[pName];
//console.log(prof3);

const season = person[25];
//console.log(season);
const son = person["son-name"];

//shortcuts
const x=50;
const y=100;
const obj ={
    x:x,
    y:y,
}
//object declaration shorthand
const obj1 ={x, y}

const name = 'piyash';
const area = 'Sylhet';

const engineer = {
    name: name,
    area: area,
}

const engineerSWE ={name, area};



