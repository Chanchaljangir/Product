"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
    },
    rate: String,
    productDate: {
        type: Date,
    }
});

let Product = mongoose.model("Product", ProductSchema);

module.exports = Product;