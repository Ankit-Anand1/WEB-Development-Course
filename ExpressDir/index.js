const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log("app is listening on port")
})

// app.use((req, res) => {
//     console.log("new incoming request");
//     res.send("this is a basic response")
// });



///Routing

app.get("/", (req, res) => {
    res.send("hello i am root path")
})

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path")
// })

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path")
// })
// app.get("*", (req, res) => {
//     res.send("path not found")
// })

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root")
// })


app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1 style= "color: green;">welcome to the page of @${username}.</h1>`
    res.send(htmlStr);
    // res.send(`welcome to the page of @${username}.`)
})

app.get("/search", (req, res) => {
    // console.log(req.query);
    // res.send("no results")

    let {q} = req.query;
    if(!q){
        console.log("nothing searched")
    }
    res.send(`search results for query: ${q}`);
});


