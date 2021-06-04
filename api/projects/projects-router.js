// Write your "projects" router here!
const express = require("express")
const Project=express()
const ProjF= require("./projects-model")


const {verifyID,verifyProject} = require("../middleWare/projectMW")



Project.get("/",(req,res,next)=>{
    ProjF.get()
        .then((proj)=>{
            res.json(proj)
    })
    .catch(next)
})


Project.get("/:id",verifyID,(req,res,next)=>{
ProjF.get(req.params.id)
    .then((proj)=>{
        res.json(proj)
})
.catch(next)
}) 


Project.post("/", verifyProject, (req,res,next)=>{
    console.log(req.body)
ProjF.insert(req.body)
    .then((proj)=>{
        res.json(proj)
})
.catch(next)
}) 


Project.put("/:id",verifyID,verifyProject,(req,res,next)=>{
ProjF.update(req.params.id,req.body)
    .then((proj)=>{
        res.json(proj)
})
.catch(next)
}) 


Project.delete("/:id",verifyID,(req,res,next)=>{
ProjF.remove(req.params.id)
    .then((proj)=>{
        res.json(proj)
})
.catch(next)
})


Project.get("/:id/actions",verifyID, (req,res,next)=>{
ProjF.getProjectActions(req.params.id)
.then(actions=>{
    res.json(actions)
})
.catch(next)
})


  
module.exports = Project