//! Put these in advanced and higher-order doc
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