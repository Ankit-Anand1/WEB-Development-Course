const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))
app.get("/", (req, res) => {
    // res.send(" this is home")

    // res.render("home.ejs");
    res.render("home");
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
