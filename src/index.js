const express = require("express")

const app = express()

app.use("/static",express.use("public"))

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(5000, () => {
    console.log("Servers is listening...");
})