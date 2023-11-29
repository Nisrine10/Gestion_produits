const mongoose = require("mongoose");//importer mongoose

//creer un scshema
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:{
        type:mongoose.Types.ObjectId,
        ref:"Category"
    }

});
//generer le model a partir du schema
const Product = mongoose.model("Product",productSchema);
module.exports = Product;

