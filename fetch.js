//1. JSON => stringify, parse
const student = {
    name: 'Sakib khan',
    age: 65,
    movies:['king khan','dhakar Mastan','1 takar kabin','caccu']
}
//convert object to JSON
const resultJSON = JSON.stringify(student);
console.log(student);
console.log(resultJSON);
//convert JSON to object
const studentObject = JSON.parse(resultJSON);
console.log(studentObject);

//2. fetch
fetch()
.then(res => res.json())
.then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//for
const numbers= [23,54,67,87,23,78];
numbers.forEach( num => console.log(num));
numbers.map(num => num*2);

// for of on array like objects
//loop on an object using for in

//array add or remove using dots.
const products = [
    {name: 'laptop', price:32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'white'},
    {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'black'},
    {name: 'earphone', price: 2000, brand: 'sony', color: 'black'},
];

const newProduct = {name: 'webcam', price: 2600, brand: 'logitech'};

//copy products array and then add newProduct
const newProducts = [...products, newProduct];

//create a new array without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
