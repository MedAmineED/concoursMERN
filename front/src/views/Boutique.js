import React from 'react';
import PubPanel from '../components/PubPanel';
import boutique1 from '../images/boutique1.jpg'
import boutique2 from '../images/boutique2.jpg'
import boutique3 from '../images/boutique3.jpg'
import boutique4 from '../images/boutique4.jpg'
import boutique5 from '../images/boutique5.jpg'
import boutique6 from '../images/boutique6.jpg'
import boutique7 from '../images/boutique7.jpg'
import Annance from '../components/Annance';

const Boutique = () => {
    const imagesArray = [boutique1, boutique2, boutique3, boutique4, boutique5, boutique6, boutique7]
  return (
    <section id="offre-container">
      <section id="offre-container-form">
        <form>
          <input type="text" placeholder="Titre de la boutique" id="titre" />
          <input type="text" placeholder="Toutes les categories" id="categories" />
          <input type="text" placeholder="Toutes les regions" id="regions" />
          <input type="text" placeholder="Toutes les villes" id="villes" />
          <input type="submit" value="Rechercher" id="offre-container-form-rechercher" className="float-none" />
        </form>
      </section>

      <p className="creer_boutique" id="new-boutique">
        <a href="#">Et si vous creer cotre propre boutique</a>
      </p>

      <section id="annonces-pubs">
        <PubPanel />
        <Annance data={imagesArray} />
      </section>

      <div className="clear" />
    </section>
  );
};

export default Boutique;
