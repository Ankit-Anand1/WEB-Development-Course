// /////////forEach


// let arr = [1,2,3,4,5];

// function print(el){
//     console.log(el);

// }

// arr.forEach(print);

// /////or

// arr.forEach (function(el)
// {
//     console.log(el);
// });


///////map and filter

// let num = [1,2,3,4];

// let double = num.map(function(el){
//     return el*2;
// });

// console.log(double)


/////filter

// let nums = [2,4,1,5,6,2,7,8,9];
// let even = nums.filter((num) => (num % 2 == 0))
// console.log(even);


////every & sum

// [1,2,3,4].every((el)=>(el%2==0)); //false

// [2,4].every((el)=>(el%2==0)); //true


////////////reduce

// let num = [1,2,3,4];
// let final = num.reduce( (res, el) => (res+el) ); //10
// console.log(final);


//////maximum

// let num = [1,2,3,4,8,9,11,4,6];

// let result = num.reduce((max, el) => {
//     if(el> max){
//         return el;
//     } else{
//         return max;
//     }
// });

// console.log(result);



///////default parameters

// function sum(a,b=3){
//     return a+b;
// }
// console.log(sum(2)); //5


// ///////////spread

// arr = [1,2,3,4,5,1,2,3,4,1,0];
// Math.min(...arr);
// console.log(Math.min(...arr))


// const data = {
//     email: "abc@gmail.com",
//     password: "abcd",
// };

// const dataCopy = {

//     console.log(...data)
// }


// //////rest

// function sum(...args){
//     return args.reduce((add, el) => add+el);
// }


///////destructuring

let names = ["tony","bruce","steve","peter"];
let [winner, runnerup] = names;
console.log(winner, runnerup);