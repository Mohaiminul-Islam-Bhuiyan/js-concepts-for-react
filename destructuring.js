// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = [42, 65]

const [a, b] = numbers;

function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}
// const [first, second] = [90, 34]

const [first, second] = boxify(67, 56);

const student = {
    name: 'Salib Khan',
    age: 32, 
    movies: ['king khan', 'dhakar mastan']
}

const [firsMovie, secondMovie] = student.movies;


console.log(boxify(67, 56))
console.log(x, y);
console.log(a, b);


// object destructuring

const {name, age} = {name: 'alu', age: 22}
const {name:name2, age:age2} = {name: 'alu', age: 22, salary: 45000}

const employee = {
    ide : 'VS Code',
    designation : 'developer',
    machine : 'mac',
    languages : ['html', 'css', 'js'],
    specifications : {
        height : 66,
        wight : 67,
        address : 'kumarkhali',
        drink : 'water',
        watch : {
            color : 'balck',
            price : 500,
            brand : 'garmin'
        }
    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specifications;
const {brand} = employee?.specifications?.watch;