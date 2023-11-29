
//import "../connexion.css"; // Assurez-vous d'importer votre fichier CSS

/*export function ConnexionLogin() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    // Ajoutez ici la logique de connexion, par exemple, appeler un service pour vérifier les informations d'identification
    // Gérez les erreurs en conséquence et mettez à jour l'état d'erreur si nécessaire

    // Exemple de gestion d'erreur fictive
    setError("Nom d'utilisateur ou mot de passe incorrect");

    // Réinitialiser les champs après la soumission
    setUsername("");
    setPassword("");
  }

  function handleCancel() {
    // Ajoutez ici la logique d'annulation si nécessaire
  }

  return (
    <>
      <div className="form-wrapper">
        <form className="modal-content animate" onSubmit={handleLogin}>
          <h2>Connexion</h2>

         

          <div className="form-group">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
             
            
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              
            />

            <label className="remember-me">
              <input type="checkbox" checked={false} name="remember" /> Remember me
            </label>
             
          </div>


          {error && <p className="error-message">{error}</p>}

          <div className="form-group" style={{ backgroundColor: "#f1f1f1" }}>
            <button type="submit" class="me-2">Login</button>

            <button type="button" className="cancelbtn" onClick={handleCancel}>
              Cancel
            </button>

          
          </div>
          <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
        </form>
      </div>
    </>
  );
}*/
import "../connexion.css"; // Assurez-vous d'importer votre fichier CSS
import React, { useState } from "react";

export function ConnexionLogin() {
  return (
    <>
      <div className="overlay">
    
        <form>
          {/* Container for items in the form */}
          <div className="con">
            {/* Start header Content */}
            <header className="head-form">
              <h2>Log In</h2>
              {/* A welcome message or an explanation of the login form */}
              <p>login here using your username and password</p>
            </header>
            {/* End header Content */}
            <br />
            <div className="field-set">
  {/* user name */}
  <div className="input-item" > 
    <span>
      <i className="fa fa-user-circle"></i>
    </span>
    {/* user name Input */}
    <input
      className="form-input"
      id="txt-input"
      type="text"
      placeholder="@UserName"
      required
    />
  </div>
  <br />
  {/* Password */}
  <div className="input-item">
    <span>
      <i className="fa fa-key"></i>
    </span>
    {/* Password Input */}
    <input
      className="form-input"
      type="password"
      placeholder="Password"
      id="pwd"
      name="password"
      required
    />
    {/* Show/hide password */}
    <span>
      <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
    </span>
  </div>
  <br />
  {/* buttons */}
  {/* button LogIn */}
  <button className="log-in">Log In</button>
</div>
            {/* other buttons */}
            <div className="other">
              {/* Forgot Password link */}
              <a href="/chemin-vers-la-page-de-mot-de-passe-oublie" className="btn submits frgt-pass">
                Forgot Password
              </a>
              {/* Sign Up button */}
              <button className="btn submits sign-up">
                Sign Up
                {/* Sign Up font icon */}
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </button>
              {/* End Other the Division */}
            </div>
            {/* End Container */}
          </div>
          {/* End Form */}
        </form>
      </div>
    </>
  );
}
