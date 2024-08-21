import React from 'react';
import Puissance from './img/puissance.png';
import generator from './img/generator.png';
import twitter from './img/twitter.png';
import spotify from './img/spotify.png';
import meetic from './img/meetic.png';
import cinema from './img/Cinema.png';



const projet = () => {
    return (
        <div id="projet">
            <h1>Mes projets</h1>
            <div id='box-img'>
                <div id="un" >
                    <img src={Puissance} alt="puissance 4" />
                    <div className='infos' id='info-puissance'>
                        <p>Nom : Puissance 4</p>
                        <p>Durée : 2 semaines</p>
                        <p>Language utilisé : JavaScript</p>
                        <p>Objectif : Refaire un puissance 4</p>
                    </div>
                </div>
                <div id="deux">
                    <img src={twitter} alt="twitter" />
                    <div className='infos' id='info-twitter'>
                        <p>Nom : twitter</p>
                        <p>Durée : 4 semaines (groupe de 4)</p>
                        <p>Language utilisé : PHP + SQL</p>
                        <p>Objectif : Refaire twitter</p>
                    </div>
                </div>
                <div id="trois">
                    <img src={generator} alt="Css generator" />
                    <div className='infos' id='info-css-generator'>
                        <p>Nom : Css generator</p>
                        <p>Durée : 2 semaines</p>
                        <p>Language utilisé : PHP</p>
                        <p>Objectif : Cree un style sheet avec les image d'un dossier</p>
                    </div>
                </div>
                <div id="quatre">
                    <img src={spotify} alt="spotify" />
                    <div className='infos' id='info-spotify'>
                        <p>Nom : Spotify</p>
                        <p>Durée : 2 Jours (groupe de 4)</p>
                        <p>Language utilisé : ReactJS + JSON</p>
                        <p>Objectif : afficher les information d'une api</p>
                    </div>
                </div>
                <div id="cinq">
                    <img src={meetic} alt="Meetic" />
                    <div className='infos' id='info-meetic'>
                        <p>Nom : My Meetic</p>
                        <p>Durée : 2 semaines</p>
                        <p>Language utilisé : PHP + SQL</p>
                        <p>Objectif : Refaire Meetic</p>
                    </div>
                </div>
                <div id="six">
                    <img src={cinema} alt="cinema" />
                    <div className='infos' id='info-cinema'>
                        <p>Nom : Cinema</p>
                        <p>Durée : 2 semaines</p>
                        <p>Language utilisé : PHP + SQL</p>
                        <p>Objectif : Faire un site de gestion d'un cinema</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projet;

