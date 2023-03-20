const numbers = [89,35,98,12];

const student = {
    name: 'Sakib khan',
    age: 65,
    movies:['king khan','dhakar Mastan','1 takar kabin','caccu']
}
//1.template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//2. arrow function

const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x,y,z) => x + y + z;
//multiply line arrow function declaration using {}
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}

//3.spread operator
const newNumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(newNumbers);
console.log(numbers);

//create a new array form an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
