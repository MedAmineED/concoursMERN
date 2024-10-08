import React from 'react';
import PubPanel from '../components/PubPanel';
import Annance from '../components/Annance';
import artc1 from '../images/article1.jpg'
import artc2 from '../images/article2.jpg'
import artc3 from '../images/article3.jpg'
import artc4 from '../images/article4.jpg'
import artc5 from '../images/article5.jpg'
import artc6 from '../images/article6.jpg'
import artc7 from '../images/article7.jpg'

const Demande = () => {
    const imagesArray = [artc1, artc2, artc3, artc4, artc5, artc6, artc7];
    return (
        <section id="offre-container">
            <section id="offre-container-form">
                <form>
                    <input type="text" placeholder="Titre de l'annonce" id="titre" />
                    <input type="text" placeholder="Toutes les categories" id="categories" />
                    <input type="text" placeholder="Toutes les regions" id="regions" />
                    <input type="text" placeholder="Toutes les villes" id="villes" />
                    <input type="submit" value="Rechercher" id="offre-container-form-rechercher" className="float-none" />
                </form>
            </section>

            <section id="annonces-pubs">
                <PubPanel/>
                <Annance data={imagesArray} /> 
                <div className="clear" />
            </section>
        </section>
    );
};

export default Demande;
