// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic condition: >, < , ===, !== , <= , >= 
// multiple condition: && , ||

if(fatherName === 'arnold' || season === 'rainy'){
    console.log()
}
else if(fatherName === 'Arnold'){

}
else {

}

// 3. array
// index, 
// length, push, 
const numbers = [89, 35, 98, 12];
numbers[0] = 56; // set value by index

// 4. for loop
for (let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number)
}

// 5. function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(5, 78);

// 6. object 
// 3 ways to access property by name
const student = {
    name: 'Salib Khan',
    age: 32, 
    movies: ['king khan', 'dhakar mastan']
}

const myVariable = 'age'

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]) // access via property name in a variable