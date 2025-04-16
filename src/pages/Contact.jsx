import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client: e.target.client.value,
        email: e.target.email.value,
        phoneNumber: e.target.phoneNumber.value,
        message: e.target.message.value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("E-mail envoyé avec succès !");
        } else {
          alert("Erreur lors de l'envoi de l'e-mail.");
        }
      })
      .catch((error) => console.error("Erreur :", error));
  }
  return (
    <div className="contact">
      <div className="contact-info">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5321925570556!2d4.8610133761770395!3d45.76052367108033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea7d1c88ccf9%3A0x9049d0e9cbe8a1ca!2s27%20Rue%20Maurice%20Flandin%2C%2069003%20Lyon!5e0!3m2!1sfr!2sfr!4v1744705696470!5m2!1sfr!2sfr"
          width="600"
          height="559"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact-mail">
          <p>
            <FontAwesomeIcon icon={faBuilding} />
            27 rue Maurice Flandin, 69003 Lyon, France{" "}
          </p>
          <p>
            <FontAwesomeIcon icon={faAt} />
            excelmenuiseries@outlook.fr
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            06 58 82 16 36
          </p>

          <form onSubmit={handleSubmit} id="form">
            <label htmlFor="client"></label>
            <input
              type="text"
              id="client"
              name="client"
              placeholder="Nom"
              required
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <label htmlFor="phoneNumber"></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Téléphone"
              required
            />

            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              placeholder="Rédigez votre message ici..."
              required
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}
