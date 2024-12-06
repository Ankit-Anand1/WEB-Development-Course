const square = (n) => {
    console.log(n*n);
}

square(5)

////question 2 : hello world 5 times

let id = setInterval(()=>{
    console.log("Hello World")
},2000);

setTimeout(() => {
    clearInterval(id)
}, 10000);
