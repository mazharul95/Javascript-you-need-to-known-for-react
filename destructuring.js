//1. array destructuring
const numbers = [42, 65];
//const x = numbers[0];
//const y = numbers[1];

//const [ x, y] = [ 42, 65]
const [ x, y] = numbers;

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}

//const [first, second] = [90, 10];
const [first, second] = boxify(90, 34);
//console.log(boxify(90, 10));

const student = {
    name: 'Sakib khan',
    age: 65,
    movies:['king khan','dhakar Mastan','1 takar kabin','caccu']
}

//const [firstMovie, secondMovie, thirdMovie] = ['king khan','dhakar Mastan','1 takar kabin'];
const [firstMovie, secondMovie, thirdMovie] = student.movies;

//object destructuring
const {name, age} = {name: 'alu', age: 14};
const {name1, age1} = {id:12, name: 'alu', age: 14};

const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: 'windows',
    languages: ['html', 'css', 'javascript'],
    specification:{
        height:66,
        weight:67,
        address:'mp',
        drink:'water',
        watch:{
            color: 'silver',
            price:1200,
            brand:'value-top',
        }
    },
    movies:['king khan','dhakar Mastan','1 takar kabin','caccu']
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
//with optional chaining ?.
const {brand} = employee?.specification?.watch;
