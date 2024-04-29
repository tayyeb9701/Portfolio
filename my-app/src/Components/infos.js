import React, { useState } from 'react';
import PDD from './img/PDD.jpg';
import PDD2 from './img/PDD2.jpg';



const Infos = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.style.backgroundColor = darkMode ? '#fff' : '#333';
        document.body.style.color = darkMode ? '#333' : '#fff';
    };

    const buttonName = darkMode ? "Mode Clair" : "Mode Sombre";

    return (
        <div id="info">
            <img src={PDD} alt="Photo_de_profil" />
            <div class="myDIV"><h1>BHATTI Tayyeb</h1></div>
            <div class="hide">Bonjour !</div>
            <br></br>
            <p>Developpeur Full-Stack</p>
            <br></br>
            <div id="moi">
                <p>Autonome, rigoureux et passionné, je suis à la recherche d'un poste de développeur</p>
            </div>
            <button id='btn-mode' onClick={toggleDarkMode}>{buttonName}</button>
        </div>
    );
};

export default Infos;