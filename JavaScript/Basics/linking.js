console.log ("Hello World!");
console.log("Ankit");
let a = 5;
let b = 5;
console.log(a+b);


//tempelate literals

let pencilPrice = 10;
let eraserPrice = 5;
// console.log ("THe total price is",pencilPrice+eraserPrice,"Rupees");
// let output = "The total price is " + (pencilPrice+eraserPrice) + " Rupees";
// console.log(output);

let output  = `The total price is : ${pencilPrice+eraserPrice} rupees. ` //Back Ticks
console.log(output);


//comparison operator
let c = 10;
let d = 15;
console.log(c<d);
console.log(c>d);
console.log(c<=d);
console.log(c>=d);
console.log(c==d)
console.log(c!=d)

let n=5;
let str = '5';
console.log (typeof n);
console.log (typeof str);
console.log(n==str); 
console.log(n===str);  // === means compare with value and type

//comparison for non-numbers

console.log('p' > 'P');
console.log('a' < 'b');


//Conditionals statement

//if statement

let age = 20;

if(age >=18){
    console.log("You can Vote");
}

if(age < 18){
    console.log("You Cannot Vote")
}
// else{
//     console.log("You Cannot Vote")
// }


// let ageA = 15;

// if(ageA >=18){
//     console.log("You can Vote");
// }
// else{
//     console.log("You Cannot Vote")
// }

let firstname = "Ankit";
if(firstname=="Ankit"){
    console.log("Hello Ankit");
}


// Nested-if else

let marks = 35;

if(marks >= 33){
    console.log("passed");
    if(marks>=80){
        console.log("Very Good")
    }else{
        console.log("Good")
    }
}else{
    console.log("failed");
}

//truthy and falsy

if(true){
    console.log("This is true");
}else{
    console.log("This is false");
}


if(0){
    console.log("This is true");
}else{
    console.log("This is false");
}

if(null){
    console.log("This is true");
}else{
    console.log("This is false");
}

if(undefined){
    console.log("This is true");
}else{
    console.log("This is false");
}

if(" "){
    console.log("This is true");
}else{
    console.log("This is false");
}




/// Switch Statement


let color = "Green";

switch(color){
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Slow Down");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Error!")
}