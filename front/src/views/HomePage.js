// MainPage.js
import React from 'react';
import MainPage from '../layout/MainPage';
import { Link } from 'react-router-dom';
import artc1 from '../images/article1.jpg'
import artc2 from '../images/article2.jpg'
import artc3 from '../images/article3.jpg'
// import './MainPage.css'; // Assuming you have a separate CSS file for styling

const HomePage = () => {
    return (
        <div id="bloc-page">
        <header>
            <div id="header-container">
                <section id="navbar">
                    <div id="logo-nav">
                        <div id="logo">
                            {/* <img src="img/logo.png" alt="Logo BizziMe" /> */}
                            <h1>BizziMe</h1>
                        </div>
                        {/* logo */}
                        <nav id="header-nav">
                            <ul style = {{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-around",
                                listStyle: "none",
                                overflow: "hidden"
                            }}>
                                <Link className= {"link-el"} to={"bizzime/annance"}>Vendre</Link>
                                <Link className= {"link-el"} to={"bizzime/offre"}>Acheter</Link>
                                <Link className= {"link-el"} to={"bizzime/boutique"}>Boutiques</Link>
                                <Link className= {"link-el"} to= {"/bizzime/connexion"}>Se connecter</Link>
                            </ul>
                        </nav>
                    </div>
                    {/* logo-nav */}
                </section>
                {/* navbar */}
                <div className="clear" />
                <section id="welcome">
                    <div id="welcome-container">
                        <aside id="form">
                            <a href="#"><h2 id="btn-depot">Déposer une annonce</h2></a>
                            <div id="welcome-form">
                                <h2 id="btn-recherche">Rechercher une annonce</h2>
                                <form>
                                    <input type="text" placeholder="Que Chercher vous" id="item" /><br />
                                    <input type="text" placeholder="Dans quelle ville" id="ville" /><br />
                                    <input type="submit" value="Rechercher" className="rechercher" />
                                </form>
                            </div>
                            {/* welcome-form */}
                        </aside>
                        <article id="welcome-text">
                            <h1>Bienvenue sur BizziMe</h1>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>
                        </article>
                        {/* welcome-text */}
                    </div>
                    {/* welcome-container */}
                    <div className="clear" />
                </section>
                {/* welcome */}
            </div>
            {/* header-container */}
        </header>
        {/* end of the header */}

        <section id="main-container">
            <section id="vente-offre-boutique">
                <h2>Visiter les offres, demandes ou boutiques</h2>
                <div id="visite">
                    <Link to= {'/bizzime/offre'} className="cercle"> OFFRES </Link>
                    <Link to = {'/bizzime/demande'}  className="cercle"> DEMANDES </Link>
                    <Link to = {'/bizzime/boutique'} className="cercle"> BOUTIQUES </Link>
                </div>
            </section>
            {/* vente-offre-boutique */}

            <section id="dernieres-annonces">
                <h2>Les dernières annonces</h2>
                <div id="annonce">
                    <img src={artc1} alt="article1" />
                    <p>Appareil Photo</p>
                    <p>99$</p>
                </div>
                <div id="annonce">
                    <img src={artc3} alt="article1" />
                    <p>Appareil Photo</p>
                    <p>99$</p>
                </div>
                <div id="annonce">
                    <img src={artc2} alt="article1" />
                    <p>Appareil Photo</p>
                    <p>99$</p>
                </div>
            </section>
            {/* dernieres-annonces */}
            <div className="clear" />
            <section id="apropos">
                <h2>Qui sommes-nous</h2>
                <p id="nous">Sed dictum id neque sed feugiat. Curabitur ac malesuada eros. 
                Phasellus a turpis eu nisi varius pellentesque vitae sed ex. 
                Curabitur a ligula sit amet ligula aliquet ullamcorper sed quis orci. 
                Quisque finibus aliquam tellus, 
                eget fringilla turpis pulvinar sit amet. Integer eu neque augue. 
                </p>
                <p className="creer_boutique"><a href="#">Et si vous créez votre propre boutique</a></p>
            </section>
            {/* apropos */}
        </section>
        {/* main-container */}
        {/* end of main-container */}

        <footer>
            <div id="bottom">
                <div className="footer-sec">
                    <h2>Informations</h2>
                    <ul>
                        <li><a href="#">Qui sommes-nous</a></li>
                        <li><a href="#">Condition d'utilisation</a></li>
                        <li><a href="#">Annonces à la une</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                {/* footer-sec */}
                <div className="footer-sec">
                    <h2>Parcourir le site</h2>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Acheter</a></li>
                        <li><a href="#">Vendre</a></li>
                        <li><a href="#">Boutique</a></li>
                    </ul>
                </div>
                {/* footer-sec */}
                <div className="footer-sec">
                    <h2>A propos</h2>
                    <ul>
                        <li>BizziMè</li>
                        <li>Téléphone : 514 668 9908</li>
                        <li>Email : rpakamey@gmail.com</li>
                    </ul>
                </div>
                {/* footer-sec */}
            </div>
            <div id="copy">
                <p>Copyright &copy; 2015 Tout droit réservé</p>
            </div>
        </footer>
        {/* end of the footer */}
    </div>
    );
};

export default HomePage;
