//  JS Array methods: .map(), .filter(), .reduce()

// Higher-Order Functions
    // Two functions…
    // let total = 0, count = 1;
    // while (count <= 10) {
    //   total += count;
    //   count += 1;
    // }
    // console.log(total);
    // console.log(sum(range(1, 10)));
        // Which is more likely to have a bug?
        // Abstraction (still exists in FP!)- recipes as an example
        // EJS pg. 85

// These will come back later but we'll get more experience with them, so if they don't make sense right now don't worry about it 

const addTwo = (x) => {
    return x + 2
}
console.log(addTwo(3))

console.log(function(x) { return x + 2}(5)) // anonymous function!
newAddTwo = function(x) {return x + 2}
console.log(newAddTwo(6)) // Can save to a variable!

const square = (func, num) => {
    return func(num)
}

console.log(square(function(x) {return x * x}, 5)) // Can pass an anonymous function as a parameter! IS A CLOSURE!!!

// another closure
const returnFunc = () => {
    // let test = 4;
    const multiplyByTwo = (num) => {
        return num * 2;
    }
    return multiplyByTwo;
}

let func_return = returnFunc();
console.log(func_return);
console.log(func_return());
// console.log(returnFunc());
// console.log(multiplyByTwo(4));
console.log(func_return(4));

// const returnLam = (b,c) => {
//     return (x,y) => {x + y + b + c}
// }
// let r_lamb = returnLam(4,5);
// console.log(r_lamb(5,5))

//! Assignment: Write an anonymous function that cubes an argument passed in; save the function to a variable 'f'
// should be able to log f(4) for example and get 64

//! MAP

const persons = [
    {firstname : "brandon", lastname: "apol"},
    {firstname : "joel", lastname: "carter"},
    {firstname : "nicole", lastname: "shannon"}
];
  

  
function getFullName(item) {
return [item.firstname,item.lastname].join(" ");
}

console.log(persons.map(getFullName));


let group_of_names = ['jerry','Ben', 'bAsh', 'Brock', 'Misty']
//  .map()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
}) // this is much cleaner, safer, more efficient than the following

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

// Recursion REVIEW
// p50
// Use recursion to show an exponent function vs a regular way of declaring it
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


const reg_factorial = (num) => {
    if (num <= 1){
        return 1
    } else {
        return num * factorial(num - 1)
    }
}
// use python tutor here

const factorial = (n) => {
    return recursiveFactorial(n, 1);
}

const recursiveFactorial = (n, accumulator) => {
    if (n <= 0) return accumulator;

    return recursiveFactorial(n-1, n*accumulator);
}

console.log(factorial(5))

//! HW: Fibonacci 