import Projet from "./Components/projet";
import Navbar from "./Components/navbar";
import Infos from "./Components/infos";
import Contacte from "./Components/contacte";
import Competence from "./Components/competence";



import React from 'react';

const App = () => {
  return (
    <section>
      <Navbar/>
      <Infos/>
      <Competence/>
      <Projet/>
      <Contacte/>
    </section>


  );
};

export default App;

