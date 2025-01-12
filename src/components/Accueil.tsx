import React from "react";
import { motion } from "framer-motion";
import profil from "../images/profil2.jpg";

const Accueil: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      id="accueil"
      className="home-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="profil-container" variants={itemVariants}>
        <img src={profil} alt="photo de profil" />
      </motion.div>
      <div className="accueil-container">
        <motion.div className="accueil-box" variants={itemVariants}>
          <motion.h1 variants={itemVariants}>Karine Raspail</motion.h1>
          <motion.div className="accueil-subtitle" variants={itemVariants}>
            Thérapeute en psychogénéalogie
          </motion.div>
          <motion.div className="accueil-text" variants={itemVariants}>
            <span className="bolder">
              Et si comprendre vos racines devenait le premier pas vers votre
              libération ?
            </span>
            Les traumatismes, secrets et conflits vécus par vos ancêtres
            continuent d’imprégner votre vie et celle de vos enfants, souvent
            sans que vous en soyez conscient.
            <span className="bolder">
              <span className="responsive-hide">
                La psychogénéalogie offre une opportunité unique.
              </span>
            </span>
            <span>
              <span className="responsive-hide">
                Revisiter votre histoire familiale à travers une séance brève
                pour explorer vos liens ancestraux. Vous pourrez identifier les
                schémas qui se répètent, libérer les blocages transmis de
                génération en génération, et amorcer une véritable réparation
                émotionnelle.
              </span>{" "}
              <br />
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Accueil;
