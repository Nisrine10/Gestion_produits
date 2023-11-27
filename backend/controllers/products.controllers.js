const Product = require("../models/Product");//appeler le modele au niveau du controlleur

async function getAllProducts(req,res){
    try{
 const product = await Product.find();
 res.status(200).json(product);
    }catch(error){
        res.status(500).send('erreur dans le serveur');
    }
}

//requete de type GET
async function getProductById(req,res){
    try{
    const idP = req.params.id;
    const product = await Product.findById(idP);
    res.status(200).json(product);
    }catch(error){
        res.status(500).send('erreur dans le serveur');
    }
}

//requete de type POST
async function addProduct(req,res){
    try{
    const product = await Product.create(req.body); //await pour attendre jusqu'a ce que le produit est creer pour l'afficher sinon elle va passer a l'affichage avmt de terminer le traitement de la creation
    res.status(201).json(product);//201 a ete bien cree--created
    }catch(error){
        res.status(500).send("erreur d'ajout");
    }
}

//requete de type DELETE
async function deleteProductById(req,res){
    try{
    const idP = req.params.id;
    const product = await Product.findByIdAndDelete(idP);
    res.status(200).json(product);

}catch(error){
    res.status(500).send("erreur de suppression");
}

}

//requete de type PUT/patch
async function updateProduct(req,res){
    try{
    const idP = req.params.id;
    await Product.findByIdAndUpdate(idP,req.body);
    res.satus(200).json("Le produit est bien modifiee");
}catch(error){
    res.status(500).send("erreur dans le serveur");
}
}


//il faut associer ces fonction a des routes dans le fichier products.routes
//il faut ajouter le routage :associer la requete avec le path pour savoir le controlleur qui va la traiter

module.exports={getAllProducts,getProductById,addProduct,deleteProductById,updateProduct};// pour exporter la fonction afin de l'utiliser dans un autre fichier