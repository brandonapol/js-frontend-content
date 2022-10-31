// In place vs out of place
// in-place
const swap = (arr, x, y, z) => {
    [arr[x], arr[y], arr[z]] = [arr[z], arr[y], arr[x]];
    return arr
}

let my_list = [30, 4, 10];
let my_list_copy = [...my_list, 5]
console.log(swap(my_list, 0,1,2));
console.log(my_list)

// out-of-place
console.log(my_list_copy)
let temp = ['a', 'a', 'a', 'a']; 
let arr_length = my_list_copy.length - 1


const out_of_place = (arr, temp) => {
    for (let i = 0; i <= arr_length; i++) {
        temp[i] = arr[arr_length - i];
    }

    arr = temp;
    return arr
}

console.log(out_of_place(my_list_copy, temp))

//! Write a function that takes in four arguments 
//(list, index1, index2, index3), and swaps those three positions in the list passed in.

//! Two Pointers Swap
const twoPointers = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left += 1;
        right -= 1;
    }
    return arr
}

console.log(twoPointers([1,2,3,12,9,8,4,11,22]))

