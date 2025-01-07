import React from 'react';
import { motion } from 'framer-motion';
import remember from "../images/remember.jpg";
import forefather from "../images/old_pic.jpg";
import call from "../videos/call.mp4";

const Therapie: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>
      <motion.div 
        id="therapie" 
        className="therapie-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="therapie-hook" variants={itemVariants}>
          Vivez-vous vraiment selon vos propres choix et croyances, ou bien
          ressentez-vous parfois l'influence invisible et incontrôlable de votre
          héritage familial?
        </motion.div>
        <motion.div className="therapie-texte" variants={itemVariants}>
          Et si votre passé familial avait encore des répercussions sur votre
          vie actuelle? Les événements, traumatismes, secrets et conflits vécus
          par vos ancêtres continuent peut-être de façonner votre existence et
          celle de vos enfants, de manière insoupçonnée.
        </motion.div>
      </motion.div>

      <motion.div 
        className="therapie2-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="therapie2-visuel" variants={itemVariants}>
          <img src={remember} alt="photo de famille" />
        </motion.div>
        <motion.div className="therapie2-texte" variants={itemVariants}>
          Il est temps de reprendre le contrôle. Grâce à la psychogénéalogie,
          plongeons ensemble dans l'histoire de votre famille pour explorer les
          liens cachés et identifier les problématiques non résolues qui
          traversent les générations, en attente de guérison.
        </motion.div>
      </motion.div>

      <motion.div 
        className="therapie3-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="therapie3-box" variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <img src={forefather} alt="photo de famille" />
          </motion.div>
          <motion.h2 variants={itemVariants}>
            Ensemble, créons l'arbre généalogique de votre lignée, en remontant
            sur trois générations.
          </motion.h2>
          <motion.div className="therapie3-subtitle" variants={itemVariants}>
            Nous mettrons en lumière les schémas familiaux qui vous empêchent de
            vivre pleinement votre authenticité.
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        id="methode" 
        className="therapie4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="therapie4-container-left" variants={itemVariants}>
          <motion.div className="therapie4-text" variants={itemVariants}>
            <motion.h3 variants={itemVariants}>Déroulement des séances</motion.h3>
            <motion.ul variants={itemVariants}>
              <motion.li variants={itemVariants}>
                Chaque séance de thérapie transgénérationnelle se déroule par le
                biais de whatsapp vidéo à l'heure convenu du rendez-vous et dure
                une heure.
              </motion.li>
              <motion.li variants={itemVariants}>
                Les séances seront consacrées à un dialogue approfondi autour de
                votre problématique actuelle, de votre histoire personnelle et
                des liens ancestraux identifiés dans l'arbre. Il s'agira de
                mettre en lumière les loyautés, les croyances familiales ainsi
                que les schémas transgénérationnels qui vous empêchent de vivre
                pleinement votre individualité.
              </motion.li>
              <motion.li variants={itemVariants}>
                Une rupture de liens et/ou une réparation vous sera proposée par
                le biais d'actes symboliques basés sur l'écriture.
              </motion.li>
              <motion.li variants={itemVariants}>
                Puis un mois plus tard nous évaluerons ensemble les changements
                survenus et aborderons d'éventuelles problématiques
                persistantes.
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
        <motion.div 
          className="therapie4-container-right"
          variants={itemVariants}
        >
          <motion.div className="video-container" variants={itemVariants}>
            <video 
              width="100%" 
              controls 
              autoPlay 
              muted 
              loop
              playsInline
              preload="auto"
            >
              <source src={call} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Therapie;
