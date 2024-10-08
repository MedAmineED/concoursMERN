import React, { useState } from 'react';
import axios from 'axios'



const ConnexionPage = () => {

  const [user, setUser] = useState({
    email: "",
    pwd : "",
  })


  const handleChange = (e) => {
    e.preventDefault();
    setUser({...user, [e.target.name]: e.target.value });
    console.log(user)
  };

  const submitUser = async () => {
    try {
      const register = await axios.post('http://localhost:5055/api/register', user);
      console.log("registred successfully")
      console.log(register)
    }catch (e) {
      console.log("error creating", e)
    }


    console.log("User has been submitted", user);
  };
  return (
    <section id="connexion-container">
      <section id="connection-compte">
        <h2>Se connecter ou creer un nouveau compte</h2>
        <p>
          Phasellus a turpis eu nisi varius pellentesque vitae sed ex. 
          Curabitur a ligula sit amet ligula aliquet ullamcorper sed quis orci. 
          Quisque finibus aliquam tellus,
        </p>
      </section>

      <section id="connection-new-compte">
        <section id="connection">
          <h2>Connexion</h2>
          <p>
            Phasellus a turpis eu nisi varius pellentesque vitae sed ex. 
            Curabitur a ligula sit amet ligula aliquet ullamcorper sed quis orci. 
            Quisque finibus aliquam tellus,
          </p>
          <form>
            <input type="text" placeholder="Entrer votre addresse mail" id="item" /><br />
            <input type="password" placeholder="Entrer votre mot de passe" id="ville" /><br />
            <p>
              <a href="#">Mot de passe oublié ?</a>
              <input type="submit" value="Connexion" className="connexion-new-compte-btn" />
            </p>
          </form>
        </section>

        <section id="new-compte">
          <h2>Creer un nouveau compte</h2>
          <p>
            Phasellus a turpis eu nisi varius pellentesque vitae sed ex. 
            Curabitur a ligula sit amet ligula aliquet ullamcorper sed quis orci. 
            Quisque finibus aliquam tellus,
          </p>
          <form onSubmit = {(e)=> { e.preventDefault()}}>
            <input value= { user.email} onChange= {handleChange} name= {"email"} type="text" placeholder="Entrer votre addresse mail" id="item" /><br />
            <input value= { user.pwd }  onChange= {handleChange}name= {"pwd"} type="password" placeholder="Entrer une mot de passe" id="item" /><br />
            <button onClick = {submitUser} value="Creer un compte" className="connexion-new-compte-btn">
              Creer un compte
            </button>
          </form>
        </section>

        <div className="clear" />
      </section>
    </section>
  );
};

export default ConnexionPage;
