

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';



//afficher ce tableau avec jsx
/*
const etudiants=[{"id":1,"nom": "said","prenom": "Mhaid","age":18},
                 {"id":2,"nom": "amin","prenom": "hshj","age":20},
                 {"id":3,"nom": "Salma","prenom": "islam","age":19},];*/

    

/*

function Home(){
 
  //definir une variable state
  const [conteur,setConteur]=useState(0);
  return (<>
              <h1 >Conteur {conteur}</h1>
              <button  onClick={()=>setConteur(conteur+1)}> + </button>
              
              <button onClick={()=>setConteur(conteur-1)}> - </button>
              
             
        </>);
  }
  */
  function EtudiantForm(){
 
    //definir une variable state
    const [nom,setNom]=useState("");
    const [prenom,setPrenom]=useState("");
    const [age,setAge]=useState(0);
    const [etudiants,setEtudiants]=useState([]);

    //fonction gestion formulaire (fonction appeler a l'interieur de composant= traitement)
    function handleForm(event){
      event.preventDefault();//eviter l'action par defaut
     const  p={"nom":nom, "prenom":prenom, "age":age}
     const etudiantsCopy=etudiants.concat([p]);
     setEtudiants(etudiantsCopy);
      //etudiants.push(p);
     // console.log(nom + " " + prenom + " " + age);
    }
    
//fonction pour la suooresion
    function deleteEtudiant(index){

    // const etudiantsCopy=etudiants.concat([]);//1st meth
    const etudiantsCopy=etudiants.slice();//2nd meth
     etudiantsCopy.splice(index,1);
     setEtudiants(etudiantsCopy);
     
    }


    return (<>

             <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {etudiants.map((elem,index)=><tr key={index}>
                                  <td>{elem.nom}</td>
                                  <td>{elem.prenom}</td>
                                  <td>{elem.age}</td> 
                                  <td> <button onClick={() => deleteEtudiant(index)}><i className="fa fa-trash"></i> </button></td>



                                 
                                  </tr>)
                }
                </tbody>

              </table>   
          
             <form onSubmit={(e)=>handleForm(e)} className="form-container">
              <label htmlFor='nom'> Nom : </label>
              <input type='text' id='nom' onChange={(e)=>setNom(e.target.value)}/>
              <br/>

              <label htmlFor='nom'> Prenom :</label>
              <input type='text' id='prenom' onChange={(e)=>setPrenom(e.target.value)}/>
              <br/>

              <label htmlFor='nom'> Age :</label>
              <input type='number' id='age' onChange={(e)=>setAge(e.target.value)}/>
              <br/>
              <br/>
              <input type='submit' value={"Submit"}  />
              <input type='reset' value={"Annuler"} />
              
             </form>
                
               
          </>);
    }
  

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Home />);
root.render(<EtudiantForm />);
reportWebVitals();
