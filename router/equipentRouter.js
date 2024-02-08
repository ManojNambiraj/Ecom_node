const router = require("express").Router();
const controller = require("../controller/equipmentController")

router.post("/addequipment", controller.addEquipmentProduct);
router.get("/equipmentList", controller.equipmentList);

module.exports = router;