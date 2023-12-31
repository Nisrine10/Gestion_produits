import React, { useEffect, useState } from "react";
import { deleteProductByID, getAllProducts, updateProduct } from "../services/product.service";
import { Link } from "react-router-dom";
import "../index.css";
import { getAllCategories } from "../services/categorie.service";

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [cat, setSelectedCat] = useState(null);


  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);


  const [categories, setCategories]= useState([]);

  async function fetchProducts() {
    const res = await getAllProducts();
    setProducts(res.data);
  }



  async function fetchCategories() {
    const res = await getAllCategories();
    setCategories(res.data);
  }

  async function deleteProduct(id) {
    const res = await deleteProductByID(id);
    fetchProducts();
  }

  function editProduct(product) {
    setEditingProduct({ ...product });
  }



  async function saveEditedProduct() {
    // Mettez à jour le produit directement dans la liste côté client
    console.log(editingProduct);
    try{
    setProducts(products.map(p => (p._id === editingProduct._id ? editingProduct : p)));
    console.log(editingProduct._id)
    await updateProduct(editingProduct);
    setEditingProduct(null);

    }catch(error){
        console.log(error)
    }
    // Réinitialisez l'état d'édition
  }

  function cancelEdit() {
    // Réinitialisez l'état d'édition sans sauvegarder les modifications
    setEditingProduct(null);
  }

  return (
    <>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px' }}>Products list</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Category</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {products.map((elem, index) => (
              <tr key={index}>
                <td className="text-center">{elem.name}</td>
                <td className="text-center">{elem.price}</td>
                <td className="text-center">{elem.category.name}</td>
                <td className="text-center">
                  <i className="fas fa-trash icon-bleue me-4" onClick={() => deleteProduct(elem._id)}></i>{" "}
                 
                  <i className="fas fa-edit icon-bleue" onClick={() => editProduct(elem)}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingProduct && (
          <div style={{ textAlign: 'center' }}>
            <h2>Edit Product</h2>
            <form>
              <label>Name:</label>
              <input
                type="text"
                value={editingProduct.name}
                onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
              />
              <label>Price:</label>
              <input
                type="number"
                value={editingProduct.price}
                onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
              />
              <br/>

               <label>Category:</label>
                            <select
                value={editingProduct.category}
                onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
              >
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
                  

              <br />
              {/* Ajout d'un saut de ligne ici */}
              <button type="button" onClick={saveEditedProduct}>Save</button>{" "}
              {/* Ajout d'un espace ici */}
              <button type="button" onClick={cancelEdit}>Cancel</button>
            </form>
          </div>
        )}

        <Link to={"/products/new"} style={{ display: 'block', marginTop: '10px' }}>Add New Product</Link>
        {/* Ajout de marges pour séparer le lien d'ajout de produit */}
      </div>
    </>
  );
}
