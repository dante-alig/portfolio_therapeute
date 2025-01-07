import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const Tarifs: React.FC = () => {
  const handleClick = (): false => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/k-raspail971/60min",
    });
    return false;
  };

  return (
    <div id="tarif" className="tarifs-container">
      <div className="tarifs-price">
        <div className="tarif-presentation">
          <h4>Presentation</h4>
          <div>
            Pour répondre à différents besoins, j'ai créé deux forfaits adaptés
            à votre parcours en psychogénéalogie. Le forfait Découverte vous
            permet d'explorer en douceur l'impact de votre héritage familial
            lors d'une première séance. Pour un travail plus approfondi, le pack
            3 séances vous offre un accompagnement sur mesure pour identifier et
            transformer durablement les schémas inconscients qui influencent
            votre vie.
          </div>
        </div>
        <div className="price1">
          <h4>
            <FontAwesomeIcon
              icon={faPagelines}
              className="pagelines"
            />
            Découverte
          </h4>
          <div className="price-number">
            90€<span> / 1 séance</span>
          </div>
          <div>
            Une séance pour découvrir la psychogénéalogie et commencez à
            explorer vos racines familiales. Faites un premier pas vers une
            meilleure compréhension de vous-même.
          </div>
          <button onClick={handleClick}>Consultation</button>
        </div>
        <div className="price2">
          <h4>
            <FontAwesomeIcon
              icon={faPagelines}
              className="pagelines2"
            />
            Thérapie
          </h4>
          <div className="price-number">
            250€<span> / 3 séances</span>
          </div>
          <div>
            Trois séances pour approfondir les dynamiques familiales et libérer
            les schémas inconscients. Un accompagnement personnalisé pour
            transformer durablement votre vie.
          </div>
          <button onClick={handleClick}>Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
