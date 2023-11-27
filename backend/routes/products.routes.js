//express contient un model qui s'apple router
const express = require("express");
const productController = require("../controllers/products.controllers");//importer le controlleur, on utilise le chemin relatif
const router = express.Router();
//il faut importer la fonction a utiliser mais avant tout il faut l'exporter a partir de son fichier


router.route('/').get(productController.getAllProducts).post(productController.addProduct);
router.route('/:id').get(productController.getProductById).delete(productController.deleteProductById)
.patch(productController.updateProduct);


module.exports = router;