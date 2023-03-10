const express = require("express")
const handlebars = require("express-handlebars")
const routes = require("./routes.js")

const app = express()

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }))

app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));

app.set("view engine", 'hbs');
//app.set("views", "./src/views")

app.use(routes)

app.listen(5000, () => {
    console.log("Servers is listening...");
})