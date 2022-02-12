let num = [1,2,3];
let result = num.map(function(n){
    return n + 1
});

let nums = [1,2,3,4];
let filter = num.filter(function(n){
    return n % 2;
});

let arr_1 = [2,3,4];
let arr_2 = [3,4,5];
console.log(...arr_1,...arr_2);