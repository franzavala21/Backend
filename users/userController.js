const notNumber = require("../utils/notNumber")
const { getAll, getUserById, registerTeam, editByID, deleteByID } = require("./userModel")




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

const editOne = async(req, res, next) => {
    if(notNumber(req.params.id, res)) return;
    const result = await editByID(+req.params.id, req.body);
    if(result instanceof Error) return next(result)
    result.affectedRows ? res.status(200).json(req.body) : next()
}


const deleteId = async(req, res, next) => {
    if (notNumber(req.params.id, res)) return;
    const result = await deleteByID(Number(req.params.id));
    console.log(result)
    if(result instanceof Error) return next(result);
    result.affectedRows ? res.status(200).end() : next()

}






module.exports = { listAll, listOne, editOne, deleteId }