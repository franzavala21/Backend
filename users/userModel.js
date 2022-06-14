const pool = require("../data/config")

const getAll = () => {
    const query = `SELECT * FROM inmobiliaria`
    try{
        return pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

const getUserById = async(id) => {
    const query = `SELECT * FROM inmobiliaria WHERE id = ${id} LIMIT 1`
    try{
        return await pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

const editByID = async(id, inmueble) => {
    const query = `UPDATE inmobiliaria SET ? WHERE id = ${id}`
    try{
        return await pool.query(query, inmueble)
    } catch (error) {
        return { "error": error.message }
    }

}





module.exports = { getAll, getUserById, editByID}