const mongoose = require("mongoose");//importer mongoose

//creer un scshema
const categorySchema = new mongoose.Schema({
    name:String,
   
});
const Category = mongoose.model("Category",categorySchema);
module.exports= Category;