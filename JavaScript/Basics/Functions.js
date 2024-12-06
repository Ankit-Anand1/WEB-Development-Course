// function hello(){
//     console.log("Hello");
// }

// hello();  ////calling hello function



// function print1to5(){
//     for(i=1; i<=5; i++)
//         console.log(i);
// }

// print1to5();


// function isAdult(){
//     let age = 18;
//     if(age<18){
//         console.log("Not an Adult");
//     }
// else{
//     console.log("Adult");
// }
// }

// isAdult();


///////function with arguments

// function printname(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }

// printname("Ankit",23);



///////////////////////////////////return keyword


// function sum(a,b){
//     return a+b;
// }

// let s = sum(2,4);
// sum(sum(1,2),3);
// console.log(s);



// function sumof(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum= sum+i;
      
//     }
//     return sum;
// }

// sumof(2,4)



///////////Scope: determines the accessibility of variables,objects,and functions from different parts of the code.


// let sum = 54; //global scope
// function calcsum(a,b){
//     let sum = a+b; ///function scope: first priority under function
//     console.log(sum);
// }

// calcsum(1,2);



///block scope


// {
//     let a = 25;
//     ///var will print but its not good idea
// }

// console.log(a);


// for(let i=1; i<=5; i++){
//     console.log(i);
// }
// console.log(i);



/////lexical scope: nested function

// function outerfunc(){
//     let x=5;
//     let y=6;
//     function innerfunc(){
//         console.log(x);
//     }

//     innerfunc();         ////////hoisting
// }




/////////function expression

// const sum = function(a,b){
//     return a+b;
// }
// sum(2,3);



///////Higher order functions

// function mutipleGreet(func, n){
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }

// mutipleGreet(greet, 2);


///////Higher order functions: returns a function

// function oddeventest(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     } else if (request == "even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     } else{
//         console.log("Wrong Request")
//     }
// }




/////////////////methods

const calculator = {
    num: 55,
    add: function(a, b){
        return a+b;
    },
    sub:function(a, b){
        return a-b;
    },
    mul:function(a, b){
        return a*b;
    }
};

console.log(calculator.num);
console.log(calculator.add(2,3));

