import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Sendmail: React.FC = () => {
  return (
    <div className="sendmail">
      <button>
        <a href="mailto:example@example.com?subject=Demande%20d'information&body=Bonjour,%20j'aimerais%20en%20savoir%20plus%20sur...">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="fa-paper-plane"
          />
          Envoyer un mail
        </a>
      </button>
    </div>
  );
};

export default Sendmail;
