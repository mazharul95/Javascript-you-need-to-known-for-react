//1. how to declare a variable using let and const
const fatherName = 'Firoj';
let season = 'rainy';
season = 'winter';

//2. Conditional expression

//6 basic condition grater than > ,less than <, ===, !==, <=, >=,
// multiple conditions: &&,

if(fatherName === 'firoj' || season === 'rainy'){

}
else if(fatherName === 'Firoj'){

}else{

}

//3. array expression
//index
//length, push,
const numbers = [89,35,98,12];
numbers[0]= 56;

//4. for loop
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

//4.1 While loop
const numbers = [3, 4, 8, 9, 2];
let number = 0;
while (number < numbers.length) {
    const getNumbers = numbers[number];
    console.log(getNumbers)
    number++
}
//Expected output:3 4 8 9 2

//5.function expression

function multiply(num1,num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(35,78);
console.log(output);

//6. object expression
//3 ways to access property by name
const student = {
    name: 'Sakib khan',
    age: 65,
    movies:['king khan','dhakar Mastan','1 takar kabin','caccu']
}
const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
