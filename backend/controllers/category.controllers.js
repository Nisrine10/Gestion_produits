const Category= require("..//models/Category");


async function getAllCategories(req,res){
    try{
 const categories = await Category.find();
 res.status(200).json(categories);
    }catch(error){
        console.log(error);
        res.status(500).send('erreur dans le serveur');
    }
}

async function addCategory(req,res){
    try{
    const category = await Category.create(req.body); //await pour attendre jusqu'a ce que le produit est creer pour l'afficher sinon elle va passer a l'affichage avmt de terminer le traitement de la creation
    res.status(201).json(category);//201 a ete bien cree--created
    }catch(error){
        res.status(500).send("erreur d'ajout");
    }
}

module.exports={getAllCategories,addCategory};