const { listAll, listOne, register, editOne } = require("./userController")

const router = require("express").Router()

router.get("/", listAll)

router.get("/:id", listOne)

router.patch("/:id", editOne )




module.exports = router