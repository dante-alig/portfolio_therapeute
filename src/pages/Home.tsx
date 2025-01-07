import React from 'react';
import Accueil from "../components/Accueil";
import Therapie from "../components/Therapie";
import Tarifs from "../components/Tarifs";
import Temoignages from "../components/Temoignages";
import Sendmail from "../components/Sendmail";

const Home: React.FC = () => {
  return (
    <div className="overflow">
      <Accueil />
      <Therapie />
      <Tarifs />
      <Temoignages />
      <Sendmail />
    </div>
  );
};

export default Home;
