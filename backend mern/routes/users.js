var express = require('express');
var router = express.Router();
const userController = require("../controllers/users")

router.get('/', userController.fetchAll);
router.get("/:id", userController.findOne)
router.post("/", userController.insertOne)
router.put("/:id", userController.update)
router.delete("/:id", userController.delete)

module.exports = router;