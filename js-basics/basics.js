// Basics of Javascript

/*
What is JS? What is programming?
Open ended, unique tasks: compare a calculator (clear goal) with designing a webpage (unclear)
How a language works; computer 'reads' your code according to agreed-upon rules
Visual interfaces vs language interfaces; front-end vs back-end

*/

// TODO make intro to binary and CS vids for all language courses
/*
// Values, Types, and Operators
Bits (two valued things, 0 or 1) 
Intro to Binary numbers
A sea of bits… is computer memory
Invoke it's name to access the value (called a binding). (Or invoke the address in memory, but names are like mailing addresses compared to longitude and latitude)

*/

/* 
    look at my multiline comment mom 
    -- Variable Declaration in Javascript -- 
    Primitive Types: strings, integers, Boolean, floats, arrays, objects (dictionaries basically)
    Functions in JS
    Loops
    Scripting vs Programming language
*/

// TODO: No need to take notes on this section

// !Do a bunch JUST in the console! Especially before we get to bindings
// ! Take info from google doc
/*
Comments?
Data Types!!!
Numbers
How decimals work
Arithmetic operations
Pemdas
NaN; Infinity
Strings
Discuss unicode vs ASCII
' " `
Escape characters
" \" "
//! use book for some of these
Concatenation
Template literals with backticks ${}
Booleans
comparisons 
Basic boolean logic
Logical Operators (&& and ||)
Null and undefined
Type conversions… automatic!
8 * null
"5" - 1
"5" + 1
"five" * 2
false == 0
NaN operations return more NaN answers
null == undefined
null == 0
Can get away from these issues with === and !== for precision equality
console.log("Michael" || "user") => "Michael"
"short circuit evaluation"
*/

// String variable 

/*
Cannot start with a digit (can have later)
$ or _ ok, no other punctuation
Look out for keywords:
break case catch class const continue debugger default delete do else enum exports extends false……..
*/

// Environment: Collection of bindings and their values; includes standard language library

// Binding cases
// camelCase
// snake_case
// PascalCase
// kebab-case
// Sometimes we will see capital letters at the front - this has special meaning we will get to Later


var first_name = 'Zack'

// Display value in JS

/*
Functions
Many values in the default environment are function data types. Functions are collections of instructions that are bound to a value; you can also think of them as 'wrapped' in a value. To make it work, we have to apply it.
You can think of it as a machine
Executing a function is called 'invoking' calling or applying
Sometimes functions take data in and do stuff to them; that data is called an argument

Returning values
Side effects vs returning things


*/
console.log(first_name)

// assign an integer 
var some_number = 32;
console.log(some_number)

// show all attributes of a document or id
console.dir(document)

// Float variable 
var some_float = 3.1415926535897932384626433832795028;
console.log(some_float)


//* Difference between returning and side effects of functions
console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);
//* We will spend a lot of time with functions so don't worry yet



// javascript hoisting 
//* and control flow
// TODO - review hoisting
a_num = 10
console.log(a_num)
var a_num
console.log(a_num)

let age = 7;
//! Do this in stages; review Python conditionals notes
/*
Control Flow
    Executed like a story, top to bottom
    Straight Line
Conditional Execution
    Branching roads! Which to go down? 
    Not a straight line; like a fork, or separate lanes that end in the same location
    if
    else
    if else if else
    use let number = 10 and then if conditions to filter the number

*/
if (age < 18){
    console.log('Minor')
} else if (age >= 18 && age < 65){
    console.log('Adult')
} else {
    console.log('Senior')
};

//* this will be covered in the intro
// console.log(some_random_variable) //Still runs but returns Undefined which is basically a None type; not good practice but does exist
// var some_random_variable = 'This is a random variable'
// console.log(some_random_variable)

//* A better way of declaring a variable is by using 'let' or 'const' keywords
// console.log(full_name)
let full_name = first_name + ' Taylor'
console.log(full_name)

const super_hero = 'The Hulk'
console.log(super_hero)
// super_hero = 'Batman'
// won't work

/*
    Basic Math operations
*/

//Addition 
let sum = 5 + 5
console.log(sum)

// Subtraction
let diff = 5 - 4

// multiplication and division same as python basically

// exponential also 

// More math ops
// Finding Floor of a decimal
let find_floor = Math.floor(5.8)
console.log(find_floor)
// alternatively math.ceil(n) brings back the ceiling

// Mind bender 
let crazy_stuff = some_float + '4'
console.log(crazy_stuff)

// Mind Bender 2
let crazy_stuff2 = some_float + parseFloat('4')
console.log(crazy_stuff2)

// Redeclaration of variables
var red_ranger = 'Jason'
var red_ranger = 'Tommy'

// Using let keyword
let nba_goat = 'Michael Jordan'
console.log(nba_goat)

nba_goat = 'Kobe'
console.log(nba_goat)

//!  Don't retype let on later variable changes

//! LOOPS COME NEXT
// Could console.log a number 10 times.. this is inefficient!
// Looping goes back to a previous place in our code and executes it again
//* Imagine a street with 5 houses - we knock on the door of each one, 
//* do something, and when we're done we go back and do it again because 
//* we are the world's most annoying neighbors

//! Review Python!!!!
//! Steal code from page 30?

// basic for loop
for (let i = 0; i < 5; i++) {
    console.log("This is a loop: " + i)
}

//Make an infinite loop on purpose to help studetns Not Be Scared 
// (it won't break your computer unless you're using an IBM 1401)
// While loops vs do while loops

let num = 0
while (num < 10) {
    if (num < 3){
        console.log('small')
    } else if (age >= 3 && age < 7){
        console.log('medium')
    // } else if (age == 8) {
    //     break // stops the loop completely
    } else {
        console.log('large')
    };
}

//! FUNCTIONS
// User-written functions exist for processes that don't exist already
// Keeps languages lightweight
// Gives us freedom
// Makes us not have to memorize 20,000 different functions and their subtleties
// Function is… A data type! Binding

const square = function(x) {
  return x * x;
};

console.log(square(12));

// Arguments and Parameters: 
// A parameter is a variable in a function definition. 
// It is a placeholder and hence does not have a concrete value. 
// An argument is a value passed during function invocation.
//! these get used either way but I want students to think differently about them

// Regular named functions 
function addNums() {
    let num = 4;
    let num2 = 5;

    return num + num2;
}

console.log(addNums())

// Bindings and Scope (Mini environments!!)
// global vs local
// BAD CODE EXAMPLE
// 'block'
// Scope can 'look out'
// Nested scope (local in local) also called 'lexical scoping'
// Overwriting bindings
// There are several ways of writing functions in JS
let x = 5

function myFunc(x) {
    let x = 7
    return x + 2
}

console.log(myFunc(x))
// Nobody has a clue what is going to get printed out!!! There's a right answer 
// but this is
//! BAD CODE 

// Variable named function with parameters
let addNums2 = function(num, num2){
    return num + num2
}

console.log(addNums2(5,6))

// Multiple params
function addNums3(x,y){
    return x + y
}

console.log(addNums3(6,7))

console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}

// Functions get put at the top of your code when compiled; so this will still work

// ES6+ Arrow Function in Javascript

// Using a single parameter in an arrow function w/o parentheses
// can only be done with one parameter

const cubed = num => {
    return num**3
}

console.log(cubed(4))

//with parens 
let cubed2 = (num) => {
    return num**3
}

console.log(cubed2(4))

// 2 parameters and arrow function just neeeds parentheses
let toThePower = (num,power) => {
    return num ** power
}
// Recommend using const for these so the function can't get deleted... causes big problems!
// Optional Arguments
function square(x) { return x * x }
square(4, true, "hedgehog")

// No error here
// "JavaScript is extremely broad-minded about the number of arguments 
// you pass to a function. If you pass too many, the extra ones are ignored. 
// If you pass too few, the missing parameters get assigned the value undefined." -47

console.log(toThePower(4,3))

console.log((function(name){
    let hello = 'Hello ' + name;
    return hello
})('Joel'))
// Not very common

// JavaScript Control Flow 
// if statements

function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(45))

function determineAge2(age){
    return (age < 18 ) ? 'minor' : (age >= 18 && age <= 65 ) ? 'Adult not retired' : 'Elderly person not retired'
}
console.log(determineAge2(11))

// Loops in JS
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}
console.log(countByOne())

function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return "Counting has stopped"
}
console.log(decreaseByOne())

function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += `this number is... ${i} \n`;
        i++;
    };
    return text;
}



// Do While loop
function count_with_do_while(){
    let i = 0;
    let text = '';

    do {
        text += `this number is... ${i} \n`
        i++
    }

    while(i < 10)
    return text
}

// DO WHILE will run AT LEAST once!!!

console.log(count_with_do_while())







// create an array 
let group_of_names = ['jerry','Ben', 'bAsh', 'Brock', 'Misty']

// Index for first position
console.log(group_of_names[0])

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


//! Put these in advanced and higher-order doc
//  JS Array methods: .map(), .filter(), .reduce()

//  .map()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})

// long form of .map()
let b_names_test = function (){
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_names_test())

// .filter()
let long_names = group_of_names.filter( element => element.length > 4)
console.log(long_names)

// .reduce()

const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})

// you can also use .join .slice .search and .splice


// TODO - place in appropriate locations
// Array variable
var some_array = [1,2,3,4];
console.log(some_array)

//object variable
//! Will be in next video document
var some_object = {'test': 'Please test me!'};
console.log(some_object)
