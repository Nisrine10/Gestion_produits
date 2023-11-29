

const express = require('express')//importer express
const app = express();//demarer express
const cors=require("cors");
const productrouter=require("./routes/products.routes")//charger les routs ici
const categoryrouter=require("./routes/categories.routes")
const mongoose = require('mongoose');
const dotenv=require("dotenv");

dotenv.config()// charger les varibales d'environnement pour les utiliser

mongoose.connect(process.env.DB_URL)
.then(result=>app.listen(process.env.Server_Port,()=>console.log("server running")))
.catch(err=>console.log(err));

app.use(cors());
//app.use(express.urlencoded());//convertir les donnes saisi dans postman en un format objet 
app.use(express.json());
app.use("/products",productrouter);
app.use("/categories",categoryrouter); //aller vers le fichier du routage tout les routes commence par /
