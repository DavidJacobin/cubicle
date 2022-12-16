const router = require("express").Router();
const cubes = require("../db.json")

const fs = require("fs/promises")

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
    fs.writeFile("../db.json",JSON.stringify(cube))
        .then(
            res.redirect("/")
        )


})

module.exports = router;