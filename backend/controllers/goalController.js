//description get goals
//routes /api/goals
//access private


const getGoals = (req, res)=> {
    res.status(200).json({message: 'get goals'})
}

const postGoals = (req, res)=> {
    if(!req.body.text) {
    res.status(400).json({message: "please add a text field"})
    }
    res.status(200).json({message: 'set goals'})
}

const updateGoals = (req, res)=> {
    res.status(200).json({message: `update goals ${req.params.id}`})
}

const deleteGoals = (req, res)=> {
    res.status(200).json({message: `delete goals ${req.params.id}`})
}



module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals,
}