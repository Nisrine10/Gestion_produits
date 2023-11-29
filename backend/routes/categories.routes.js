const express = require("express");
const categoryController = require("../controllers/category.controllers");//importer le controlleur, on utilise le chemin relati
const router = express.Router();
//il faut importer la fonction a utiliser mais avant tout il faut l'exporter a partir de son fichier


router.route('/').get(categoryController.getAllCategories).post(categoryController.addCategory);

module.exports = router;