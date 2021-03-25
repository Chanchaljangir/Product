

let express = require("express");
let router = express.Router();


let _productCtrl = require("../controllers/product");

router.get("/", function (req, res) {
  res.json({
    API: "1.0"
  });
});

router.get("/products", _productCtrl.getProducts);

module.exports = router;