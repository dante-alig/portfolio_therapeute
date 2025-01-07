import React, { useState, FormEvent, ChangeEvent } from 'react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (email && text) {
      console.log("ok");
    } else {
      alert("vous devez remplir tous les champs");
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };

  return (
    <div id="contact" className="contact-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <textarea
            id="text"
            name="text"
            value={text}
            rows={10}
            cols={50}
            placeholder="Posez-moi une question ici..."
            onChange={handleTextChange}
          />
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Contact;
