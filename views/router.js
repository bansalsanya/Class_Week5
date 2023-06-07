const { application } = require("express")
var express = require("express")
var router = express.Router()

router.get("/faculty",(req,res)=>{
    const faculty = {
        fid:1,
        name: "Sanya",
        city:"Toronto",
        college:"Seneca"
    }
    res.send(faculty)
})
router.post("/fulltimefaculty",(req,res)=>{
    const faculty = {
        fid:2,
        name: "Sanya",
        city:"Toronto",
        college:"Seneca"
    }
    res.send(faculty)
})

module.exports = router


//app.use("/users",usersRouters)
router.delete("/student",(req,res)=>{
    res.status(201).send("<h1>Record Deleted</h1>")
})
router.put("/student",(req,res)=>{
    res.send("<h1>PUT - Record</h1>")
})
router.patch("/student",(req,res)=>{
    res.send("<h1>PATCH - Record</h1>")
})

//res.setHeader("Content-Type","application/")