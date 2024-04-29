import React from 'react';
import { FaArrowUp } from "react-icons/fa";



const contacte = () => {

    return (
        <div id='contacte'>
            <h1>Contactez moi !</h1>
            <div id="envoyer-email">
                <form action="">
                    <label for="nom">Nom : </label>
                    <input type="text" id="nom" />
                    <label for="email">Email : </label>
                    <input type="text" id="email" />
                    <label for="msg">Message : </label>
                    <input type="text" id="msg" />
                    <input type="button" id="valider" value="Envoyer" />
                </form>
            </div>
            <br></br>
            <a href='#navbar'><FaArrowUp /></a>
        </div>
    );
};

export default contacte;