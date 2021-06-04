const actions = require('../actions/actions-model')


function verifyActionID(req, res, next) {
    actions.get(req.params.id)
    .then((actions)=>{
    if(!actions){
    res.status(404).json({message:"id not found"})
    }
    else{
    req.actions=actions
    next()
    }
    })
    .catch((err)=>{
        res.status(500).json({message:"500"})
    })
    }


    function verifyAction(req, res, next) {
        const {completed,description,notes,project_id} = req.body
       if(!project_id||!description||!notes){
            res.status(400).json({message:"please fill in all required fields"})
        }
        else{
            res.project= {completed,description,notes}
           next()
      }
    }

    
    module.exports={verifyActionID,verifyAction}
    