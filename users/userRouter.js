const { listAll, listOne, register } = require("./userController")

const router = require("express").Router()

router.get("/", listAll)

router.get("/:id", listOne)

router.post("/", register )




module.exports = router