"use strict";

const moment = require("moment");

//models
const Product = require("../models/product");


async function getProducts(req, res) {
    let respObj = {
        IsSuccess: false,
        Message: "OK.",
        Data: null,
    };

    try {
        let product = await Product.find();
        console.log("product",product)
        respObj.IsSuccess = true;
        respObj.Data = product;
        res.status(200).json(respObj);
    } catch (err) {
        respObj.error = err;
        console.log("err",err);
        (respObj.message = err.message || "Error while processing db query"),
            res.status(500).json(respObj);
    }
}

module.exports = {
    getProducts,
};