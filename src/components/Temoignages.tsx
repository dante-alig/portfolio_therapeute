import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface SliderSettings {
  className: string;
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  adaptiveHeight: boolean;
  responsive: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }>;
}

const Temoignages: React.FC = () => {
  const settings: SliderSettings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderStars = () => (
    <div className="slider-star">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  );

  return (
    <div className="temoignages">
      <div className="slider-container">
        <h1>Témoignages</h1>
        <Slider {...settings}>
          <div className="slider-box">
            <div className="slider-border">
              <p>
                Depuis plusieurs années, je sentais un poids trop lourd pour
                être le mien. Ma vie oscillait entre moments de bien-être et
                périodes de chaos. Karine, par sa bienveillance, m'a mis à
                l'aise et m'a expliqué le déroulement des séances. Elle a établi
                des liens transgénérationnels sur cinq générations et m'a donné
                des actes symboliques à réaliser pour briser ces liens et vivre
                pleinement mon individualité...
              </p>
              <p className="slider-name">Jérome</p>
              {renderStars()}
            </div>
          </div>
          <div className="slider-box">
            <div className="slider-border">
              <p>
                Karine est une personne douce et lumineuse avec qui on se sent
                en confiance. Durant la séance, elle trouve les mots justes pour
                aborder les sujets sensibles ( même quand on tourne autour du
                pot). Les exercices proposés sont personnalisés et vraiment
                adaptés à la problématique. Grâce à Karine, j'ai pu améliorer
                mes relations en travaillant avec elle sur la blessure de
                l'abandon qui est récurrente dans ma famille.
              </p>
              <p className="slider-name">Linejy</p>
              {renderStars()}
            </div>
          </div>
          <div className="slider-box">
            <div className="slider-border">
              <p>
                Je pensais avoir une problématique irréparable qui est
                l'adoption. Karine a su me mettre en confiance sans jugement et
                nous avons eu de plus en plus d'information sur ma lignée
                maternelle. J'ai compris que nos ancêtres nous transmettent des
                schémas de vies .Si nous voulons guérir de ses schémas nous
                trouvons des solutions dans notre arbre généalogique...
              </p>
              <p className="slider-name">Anitha</p>
              {renderStars()}
            </div>
          </div>
          <div className="slider-box">
            <div className="slider-border">
              <p>
                Merci Karine pour ton accompagnement dans la compréhension de
                mon arbre généalogique . Merci pour toutes tes analyses et
                explications à ce sujet. Merci de m'aider à trouver ma mission
                de vie.
              </p>
              <p className="slider-name">Elodie</p>
              {renderStars()}
            </div>
          </div>
          <div className="slider-box">
            <div className="slider-border">
              <p>
                J'avais l'impression de porter des fardeaux qui n'étaient pas
                les miens, des peurs et des blocages qui me dépassaient. Dès les
                premières séances, j'ai été profondément bouleversée par ce que
                j'ai découvert sur mon histoire familiale. Il y avait tant de
                secrets, de non-dits, et de blessures invisibles qui se
                transmettaient de génération en génération...
              </p>
              <p className="slider-name">Sophie</p>
              {renderStars()}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Temoignages;
