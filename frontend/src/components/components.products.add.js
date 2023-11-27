import { useState } from "react";
import{addProduct} from "../services/product.service";
import{ useNavigate} from "react-router-dom";
import "../index.css"
export function ProductAddForm(){
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const navigate=useNavigate();

   async function handlForm(event){
        //pour ne pas actualiser la page quand j'envoie le formulaire 
        event.preventDefault();
        const p = {"name":name,"price":price}

       await addProduct(p);
       navigate("/products");
      }
      return(<>
        <div className="form-wrapper">
          <form onSubmit={(e) => handlForm(e)}>
      
            <div className="form-group">
              <label htmlFor="name" className="form-label"> Name :</label>
              <input type="text" id="name" className="form-control" placeholder="Product's Name" onChange={(e) => setName(e.target.value)} />
              <br />
            </div>
      
            <div className="form-group">
              <label htmlFor="price" className="form-label"> Price :</label>
              <input type="number" id="price" className="form-control" placeholder="Product's Price" onChange={(e) => setPrice(e.target.value)} />
              <br />
            </div>
      
            <div className="mb-3"> {/* Ajoute une marge en bas */}
              <input type='submit' className="btn btn-primary me-2" value={"Enregister"} /> {/* Ajoute une marge à droite */}
              <input type='reset' className="btn btn-danger" value={"Annuler"} />
            </div>
      
          </form>
        </div>
      </>
      
      )
}