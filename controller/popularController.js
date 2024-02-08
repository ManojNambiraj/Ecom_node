const Product = require("../model/popularModel");

const controller = {
  async addProduct(req, res) {
    try {
      const { img, type, name, price, rating } = req.body;

      const findProduct = await Product.findOne({ name: name });

      if (!findProduct) {
        const insertedProduct = await Product.create({
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
          .json({ status: false, message: "Product already exists" });
      }
    } catch (error) {
      res.status(500).json({ status: false, message: error });
    }
  },

  async popularProductList(req, res) {
    try {
      const findProducts = await Product.find();

      res.status(200).json({ status: true, message: findProducts });
    } catch (error) {
      res.status(500).json({ status: false, message: error });
    }
  },
};

module.exports = controller;
