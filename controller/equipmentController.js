const Equipment = require("../model/equipmentModel");

const controller = {
  async addEquipmentProduct(req, res) {
    try {
      const { img, type, name, price, rating } = req.body;

      const findProduct = await Equipment.findOne({ name: name });

      if (!findProduct) {
        const insertedProduct = await Equipment.create({
          img: null,
          type: type,
          name: name,
          price: price,
          rating: rating,
        });

        res.status(201).json({ status: true, message: insertedProduct });
      } else {
        res
          .status(403)
          .json({ status: false, message: "Equipment already exists" });
      }
    } catch (error) {
      res.status(500).json({ status: false, message: error });
    }
  },

  async equipmentList(req, res) {
    try {
      const findProducts = await Equipment.find();

      res.status(200).json({ status: true, message: findProducts });
    } catch (error) {
      res.status(500).json({ status: false, message: error });
    }
  },
};

module.exports = controller;
