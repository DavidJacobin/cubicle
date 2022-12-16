const router = require("express").Router();
const cubes = require("../db.json")

const fs = require("fs/promises")
const path = require("path")

router.get('/create', (req, res) => {
    res.render("create")
})

router.post("/create", (req, res) =>{
    const cube = req.body

    if(cube.name.length == 0){
        alert("Name must be filled!")
        return
    }

    cubes.push(cube)
    fs.writeFile(path.resolve("db.json"),JSON.stringify(cube, "", 2))
        .then(
            res.redirect("/")
        )


})

router.get('/details/:id',(req,res) =>{
    const cubeOne = cubes[req.params.id]
    res.render("details", {cubeOne})
})

module.exports = router;