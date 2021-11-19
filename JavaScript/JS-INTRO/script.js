// var, let, const
// String, Numbers, Boolean, null, undefined

const name = 'john';
const age = 30;
const rating = 4.5;
const isColl = true;
const x = null;
const y = undefined
let z;

// Concatenation
console.log('My name is name and I am age');
console.log('My name is' + name + 'and I am' + age);

//New way
console.log(`My name is ${name} and I am ${age}`);


const s = 'Hello World'
console.log(s.length);
// Methods use parantheses and property don't have parantheses
console.log(s.substring(0,5).toUpperCase) // = HELLO
console.log(s.split(''))

// array -- .isArray indicate if it is an array
// .push : add to the end
// .unshift : add to beginning

// Object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    adress: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }

}

console.log(person.hobbies[1], person.adress.city)

//destructuring

const { firstName, lastName} = person;

// arrays
const todos = [
    {
        id: 1,
        text:'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text:'Dentist',
        isCompleted: false
    }
]
// transform in JSON. Ex : To send to a server
const todoJSON = JSON.stringify(todos)

// For loop
for(let todo of todos) {
    console.log(todo)
}

// high order methods : forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text)
});

const todoText = todos.map(function(todo) {
    return todo.text
});
console.log(todoText)

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted)

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted)

const x = 10;
if(x == 10) {
    console.log('x is 10')
}
// triple '=' match the number and the type of data

const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}

function addNums(num1, num2) {
    return num1 + num2;
}

console.log(addNums(5,4));

// arrow function
const addNums = (num1, num2) => {
    return num1 + num2;
} 
// OR :
const addNums = (num1, num2) => num1 + num2;
todos.forEach((todo) => console.log(todo));


//constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear
    // }
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`;
    // }
}

// prototype
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear;
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}


// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
} 


// instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');


// // Single element
// document.getElementById('my-form');
// document.querySelector('.container')

// // Multiple element
// document.querySelectorAll('.item')

// // DOM
// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
// btn.style.background = 'red';
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark');
});