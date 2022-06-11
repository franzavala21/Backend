const notNumber = require("../utils/notNumber")
const { getAll, getUserById, registerTeam } = require("./userModel")




const listAll = async(req, res, next) => {
    const result = await getAll()
    if (result instanceof Error) return next(result)
    result.length ? res.status(200).json(result) : next()

}

const listOne = async(req, res, next) =>{
    if(notNumber(req.params.id, res)) return;
    const result = await getUserById(Number(req.params.id));
    if(result instanceof Error) return next(result);
    result.length ? res.status(200).json(result) : next()

    
}

const register = async(req, res, next) => {
    const result = await registerTeam(req.body)
    console.log(result)
    result.hasOwnProperty("error") ? res.status(500).json(result) : res.status(201).json(req.body)
}




module.exports = { listAll, listOne, register }