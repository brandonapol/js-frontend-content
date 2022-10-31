// TODO Closures
// TODO Recursion

// Arrays
// Prototypes
// Objects
// Closures
// Higher Order Functions

// -- JavaScript Closure -- //
/*

    "A closure is the combination of a function bundled together (enclosed) 
    with references to its surrounding state (the lexical environment). 
    In other words, a closure gives you access to an outer function's scope 
    from an inner function. In JavaScript, closures are created every time a 
    function is created, at function creation time."

    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.

    Closures
        You can bind functions inside of other functions, and they'll only be available within the first function
        This gets MUCH more useful when we're doing web development
        Is a way of 'saving' values in functions
            Has to do with stack heap etc; review Fireship video on closures
        "it saves it but doesn't do anything observable yet" - returning a return statement


*/



var my_num = 5

var addNums = function () {
    var insideNum = 6;
    return my_num + insideNum;
};

console.dir(addNums) // Won't call itself a closure just yet but we're in the right direction

let newAdd = function(outer_var){

    let innerAdd = function(inner_var){
        return outer_var + inner_var;
    };

    return innerAdd;
};

let addFive = new newAdd(5);
let addSix = new newAdd(6);

console.dir(newAdd);
console.dir(addFive); // Scopes includes a closure 
console.dir(addSix);

console.log(addFive(3))


let count_up =  function() {
    let counter = 0; // This will be our PRIVATE variable
    console.log('Hit')
    return function () { return counter++}
}

count_up()
count_up()
count_up()
console.dir(count_up())
// Can't see the counter, but the counter DOES exist
// The scopes closure only sees what the anonymous function sees

let addNames = ( function () {
    let names = [];
    console.log('Adding Names')
    return function (name){
        console.log(names)
        return names.push(name)
    }
})() // we'll come back to this later

console.log(addNames('Brandon'))
console.log(addNames('Lydia'))
console.log(addNames('Joel')) // We'll get to more of what this means in a little bit

// Recursion
// p50
// Use recursion to show an exponent function vs a regular way of declaring it
// We'll review Closures and Recursion in later sections
// Elegant Code and refactoring functions
// Don't add cleverness until you're absolutely sure you'll need it
// Functions and Side Effects
// Pure functions
// 'helper functions' just as a vocab term
// Side effects vs return value functions
// Good HW assignments here

function getFactorialWhileLoop(n){
    let result = 1;
    while (n > 1) {
        result = result * n;
        n -= 1;
    }
    return result;
}

console.log(getFactorialWhileLoop(5));

function getFactorialRecursively(n){
    if (n <= 1){
        return 1;
    }
    else{
        return n * getFactorialRecursively(n-1);
    }
}

console.log(getFactorialRecursively(5));

// Objects and Arrays
// 'data sets'
// How data is stored in computer memory
// How arrays are stored in computer memory
// How we access a specific location of a data set
// dots vs []; null.length 'has no properties'


//! ARRAYS

// create an array 
let group_of_names = ['jerry','Ben', 'bAsh', 'Brock', 'Misty']

// So we have a series of strings in computer memory somewhere...
// What if I want to get back just one of those values?
// What is the mailing address?
// Index for first position
console.log('Brandon is here')
console.log(group_of_names["jerry"]) // Doesn't work, doesn't make sense here
console.log(group_of_names[0])

// todo - find arr exercises from python

//* Array methods: arr.toString(), arr.join(' '), arr.pop(), arr.push(val), arr.shift() [removes first element & returns it],
//* arr.unshift(),  delete arr[0] [replaces val with undefined], arr1.concat(arr2, arr3)
//* No min or max functions; sort and then pop or shift

// Deconstruction
let terry, ben, misty;
[terry, misty, ben] = group_of_names
console.log(terry,ben,misty)

// Method 1 for looping through an array 
function show_all_names(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'done'
}

console.log(show_all_names())

// method 2
console.log(group_of_names.forEach(element => console.log(element)
))

// JS Array method: array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))


// TODO - place in appropriate locations
// Array variable
var some_array = [1,2,3,4];

console.log(some_array["length"])
console.log(some_array.length)
// console.log(some_array.length())
console.log([1,2,'apple',4].includes('apple'))
console.log('apple'.includes('a')) // strings are technically arrays under the hood
let new_arr = [1,2,3,[4,'guacamole','dogs']]
console.log(new_arr[3][1])

//object variable

//! OBJECTS 

var some_object = {'test': 'Please test me!'};
console.log(some_object)


// -- Creation of Objects in JavaScript

// Object types
    // Arbitrary groupings of attributes
        // Uses {} (like python dict)
        // Difference between 'expression' and 'object' declarations with {}
        // using delete
        // keys and values as keys to lockers and their content
        // What's going on under the hood with keys and values?
        // .keys
        // .assign() 
        // Arrays are just objects specialized for storing sequences of things


// -- Simple JavaScript Object --

let person = {
    name: 'John',
    age: 28,
    fav_color: 'Red'
}

// Accessing Data in our Object
console.log(person['name']) // Bracket Notation
console.log(person.name) // Dot Notation
console.log(Object.keys(person)) // returns array of keys
console.log(Object.assign(person, {hometown: "chicago"}))

// -- Complex JavaScript Object
let person2 = {
    name: "Max",
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United', 'Liverpool']
        }
    ]
}

console.log(person2.prog_languages[2]);
console.log(person2.teams[1].soccer[0]);

// -- JavaScript Object Prototype Methods -- Object Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Bad/Sad Path of looping through objects in JavaScript
for(let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

// Happy Path of looping through objects in Javascript -- Looking for keys
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

// List Values from the person2 Object that are arrays
for(let i = 0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}

// [] + []

// [] + {}

// {} +[]

// {} + {}

// Array(16)

// Array(16).join('js is weird' + 1)

// Mutability - Objects are mutable; Arrays are mutable, but array prototypes are not (strings for example)

// There are a few more array methods - see EJS for more, or research W3 array methods

// Math object: keys are names, values are functions / mathematical values
// Seen this before; Math.max(), Math.floor() etc

// JSON is in the book, we will take time to learn to mess with JSON later

// Create our own Object Prototypes -- with ES5 Method Syntax
function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;

    // A Method inside of a JS Prototype
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}
        and has ${wheels} and the color is ${color}`);

        return 'Returned Value'
    }
}



// Creating an instance of a prototype
let my_car = new Car('Honda', 'CR-V', 2019)

// Call our prototype method
console.log(my_car.printInfo(4, 'Gun Metal'))


// -- JavaScript Classes -- //

class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    printInfo() {
        return `Name: ${this.name} \n Age: ${this.age} \n Gender: ${this.gender}`
    }
}

// Creating an instance of our Human Class

let wilma = new Human('Wilma', 25, 'Female');

// Use printInfo method from the instantiated wilma(Human) Class
console.log(wilma.printInfo())


// JavaScript Inheritence using Classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }

    isBabywalking() {
        if(this.walking == true){
            return 'Baby is walking!'
        } else {
            return 'Baby aint walking yet'
        }
    }
}

// Create an instatiated value for baby
let johnnie = new Baby('Johnnie', 1, 'Male', true);
console.log(johnnie.printInfo())
console.log(johnnie.isBabywalking())



// Async JavaScript Section //

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic Example
function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

// first()
// second()

// But what happens when we add delay to execution...
function first_delay(){
    // Simulation of delay
    setTimeout(function() {
        console.log(1)
    }, 5000)
}

function second_delay(){
    console.log(2)
}

// first_delay()
// second_delay()

// Callback function syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`)
    callback()
}

// doHomework('JavaScript', function() {
//     console.log('Done with Homework')
// })

/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

// We solve this above problem with Promises

/*
    ======= Creating a JS Promise =====
*/
const isEvenNumber = (num) => {
    return new Promise( (resolve,reject) => {
        if(num % 2 == 0){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// Using a JS Promise
isEvenNumber(10)
//Happy resolver path
.then( (result) => {
    console.log(`Even Number ${result}`)
})
//Sad Reject path
.catch( (error) => {
    console.log(`Odd Number ${error}`)
})



// Another Example with Promises -- using Async/Await
function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// function to add to base salary slowly
function slow_addition(n1, n2){
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1 + n2), 2000)
    })
}

function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`The new salary is: ${new_salary}`);
    return new_salary
}

