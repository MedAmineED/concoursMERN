import React from 'react';

const FooterCST = () => {
    return (
        <footer>
            <div id="bottom">
                <div className="footer-sec">
                    <h2>informations</h2>
                    <ul>
                        <li><a href="#">Qui sommes nous</a></li>
                        <li><a href="#">Condition d'utilisation</a></li>
                        <li><a href="#">Annonces à la une</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                <div className="footer-sec">
                    <h2>parcourrir le site</h2>
                    <ul>
                        <li><a href="#">Acceuil</a></li>
                        <li><a href="#">Acheter</a></li>
                        <li><a href="#">Vendre</a></li>
                        <li><a href="#">Boutique</a></li>
                    </ul>
                </div>
                <div className="footer-sec">
                    <h2>a propos</h2>
                    <ul>
                        <li>BizziMè</li>
                        <li>Tel : 514 668 9908</li>
                        <li>Mail : rpakamey@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div id="copy">
                <p>Copyright &copy; 2015 Tout droit reservé</p>
            </div>
        </footer>
    );
}

export default FooterCST;
