// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Assuming you have a separate CSS file for styling

const NavBarCST = () => {
    return (
        <header>
            <div id="header-container">
                <section id="navbar">
                    <div id="logo-nav">
                        <div id="logo">
                            {/* <img src="img/logo.png" alt="Logo BizziMe" /> */}
                            <h1>BizziMe</h1>
                        </div>
                        {/* logo */}
                        <div id="header-form">
                            <form id="form-offre">
                                <input type="text" placeholder="Que Chercher vous" id="item-offre" /><br />
                                <input type="text" placeholder="Dans quelle ville" id="ville-offre" /><br />
                                <input type="submit" value="Rechercher" id="rechercher-offre" className="float-none" />
                            </form>
                        </div>
                    </div>
                    {/* logo-nav */}

                    <nav id="header-nav-offre">
                        <ul>
                            <Link className= {"sec-nav-el"} to= {"/"}>Accueil</Link>
                            <Link className= {"sec-nav-el"} to= {"/bizzime/annance"}>Déposer une annonce</Link>
                            <Link className= {"sec-nav-el"} to= {"/bizzime/offre"}>Offres</Link>
                            <Link className= {"sec-nav-el"} to= {"/bizzime/demande"}>Demandes</Link>
                            <Link className= {"sec-nav-el"} to= {"/bizzime/boutique"}>Boutiques</Link>
                            <Link className= {"sec-nav-el"} to= {"/bizzime/roulette"}>Jeux</Link>
                            <Link className= {"sec-nav-el"} to= {"/bizzime/connexion"}>Se connecter</Link>
                        </ul>
                    </nav>
                </section>
                {/* navbar */}
                <div className="clear"></div>
            </div>
            {/* header-container */}
        </header>
    );
};

export default NavBarCST;
