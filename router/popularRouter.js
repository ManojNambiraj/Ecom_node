const router = require("express").Router();
const controller = require("../controller/popularController")

router.post("/add", controller.addProduct);
router.get("/popularList", controller.popularProductList);

module.exports = router;