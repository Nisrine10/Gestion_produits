import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';



/*
function ProductPage(){

  //variables states ou sont stockés les données
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [products,setProducts] = useState([]);

  const http=axios.create({});

  useEffect(()=>{
    fetchProducts();
  },[])

  async function fetchProducts(){
    const res=await http.get("http://localhost:5000/products");
    setProducts(res.data);
  }

  function handlForm(event){
    //pour ne pas actualiser la page quand j'envoie le formulaire 
    event.preventDefault();
    

  }

  async function deleteProduct(id){
    const res=await http.delete(`http://localhost:5000/products/${id}`);
    fetchProducts();
  }

return (<>
      
      <div className="table-wrapper">
            <table  className="fl-table">
              <tr>
                <th className="text-center">Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Action</th>
              
              </tr>
              <tbody id="tbody"> 
                
                {products.map((elem,index)=>(
                  <tr key={index}>
                    <td className="text-center">{elem.name}</td>
                    <td className="text-center">{elem.price}</td>
                    <td className="text-center">

                    <i className="fas fa-trash icon-rouge" onClick={() => deleteProduct(elem._id)}></i>
                    <i className="fas fa-pencil-alt icon-bleue" onClick={() => deleteProduct(elem._id)}></i>
                  </td>
                    </tr>
                ))}
              
              </tbody>
            </table>
          </div>



      <div className="form-wrapper">
      <form onSubmit={(e)=>handlForm(e)}>

        <label htmlFor= "name"> Name :</label>
        <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/>
        <br/>

        <label htmlFor= "price"> Price :</label>
        <input type="number" id="price" onChange={(e)=>setPrice(e.target.value)}/>
        <br/>

        <input type='submit' value={"Enregister"}/>
        <input type='reset' value={"Annuler"}/>

      </form>
      </div>
      </> );

}
*/

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//root.render(<Home />);

reportWebVitals();