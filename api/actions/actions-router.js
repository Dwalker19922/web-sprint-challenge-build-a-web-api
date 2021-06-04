// Write your "actions" router here!
const express = require("express")
const Actions=express()
const actions = require('./actions-model')
const {verifyActionID,verifyAction}= require("../middleWare/actionsMW")

Actions.get("/",(req,res,next)=>{
 actions.get()
.then((action)=>{
res.json(action)
})
.catch((err)=>{
    res.status(500).json({message:err.message})
})
})

Actions.get( "/:id", verifyActionID,(req,res,next)=>{
actions.get(req.params.id)
.then(actions=>{
    res.json(actions)
})
.catch(next)
})

Actions.post( "/",verifyAction,(req,res,next)=>{
    actions.insert(req.body)
    .then((actions)=>{
        res.json(actions)
    })
    .catch(next)

})
Actions.put( "/:id",verifyActionID,verifyAction,(req,res,next)=>{
actions.update(req.params.id,req.body)
.then((actions)=>{
    res.json(actions)
})
})

 Actions.delete("/:id",verifyActionID,(req,res,next)=>{
actions.remove(req.params.id)
.then(actions=>{
    res.json(actions)
})
.catch(next)
 })



module.exports = Actions