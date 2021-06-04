const project = require('../projects/projects-model')


function verifyID(req, res, next) {
project.get(req.params.id)
.then((project)=>{
if(!project){
res.status(404).json({message:"id not found"})
}
else{
req.project=project
next()
}
})
.catch((err)=>{
    res.status(500).json({message:"err"})
})
}



function verifyProject(req, res, next) {
    const {completed,description,name} = req.body
   if(!req.body.completed||!req.body.description||!req.body.name){
        res.status(400).json({message:"please fill in all required fields"})
    }
    else{
        res.project= {completed,description,name}
       next()
  }
}



module.exports = {verifyID,verifyProject}