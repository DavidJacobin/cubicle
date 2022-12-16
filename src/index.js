const express = require("express")
const handlebars = require("express-handlebars")

const app = express()

app.use(express.static('public'));

app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));

app.set("view engine", 'hbs');
//app.set("views", "./src/views")

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/create", (req, res) => {
    res.render("create")
})

app.listen(5000, () => {
    console.log("Servers is listening...");
})