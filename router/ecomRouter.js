const router = require("express").Router();
const controller = require("../controller/ecomController")

router.get("", controller.productList)

module.exports = router;