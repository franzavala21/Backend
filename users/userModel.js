const pool = require("../data/config")

const getAll = () => {
    const query = `SELECT * FROM mundial`
    try{
        return pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

const getUserById = async(id) => {
    const query = `SELECT * FROM mundial WHERE id = ${id} LIMIT 1`
    try{
        return await pool.query(query)
    } catch (error) {
        error.message = error.code
        return error
    }
}

const registerTeam = async(team) => {
    const query = `INSERT INTO mundial SET ?`
    try{
        return await pool.query(query, team)
    } catch (error) {
        return { "error": error.message }
    }

}





module.exports = { getAll, getUserById, registerTeam}