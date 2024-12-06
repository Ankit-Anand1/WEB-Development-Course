let toDo = [];

let req = prompt("Please Enter your Request");
console.log(req);

while(true){
    if(req=="quit"){
        console.log("Quitting App");
        break;
    }

    if(req == "list"){
        console.log("-----------------");
        for(let i=0 ; i<toDo.length; i++){

            console.log(i, toDo[i]);
        }
        console.log("-----------------");
    } else if (req == "add"){
        let task = prompt("Please Enter your Task you want to Add");
        toDo.push(task);
        console.log("Task Added");
        console.log("Current To-Do List:");
        for (let i = 0; i < toDo.length; i++) {
            console.log(i, toDo[i]);
        }
    } else if(req == "delete"){
        let index = prompt("Please Enter the index of the task you want to delete");
        toDo.splice(index, 1);
        console.log("Task Deleted");
        console.log("Current To-Do List:");
            for (let i = 0; i < toDo.length; i++) {
                console.log(i, toDo[i]);
    }
}
    else{
        console.log("wrong request")
    }
    req =  prompt("Please Enter your Request");
}