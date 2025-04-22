import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const elements = form.elements;

    const userName = elements.userName.value;
    const email = elements.email.value;
    const phoneNumber = elements.phoneNumber.value;
    const message = elements.message.value;

    if (!userName || !email || !message) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(userName)) {
      alert("Le nom ne doit contenir que des lettres et des espaces.");
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }
    if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
      alert("Le numéro de téléphone doit contenir 10 chiffres.");
      return;
    }
    if (message.length < 10) {
      alert("Le message doit contenir au moins 10 caractères.");
      return;
    }
    if (message.length > 500) {
      alert("Le message ne doit pas dépasser 500 caractères.");
      return;
    }

    alert(
      `Nom : ${userName}\nEmail : ${email}\nTéléphone : ${phoneNumber}\nMessage : ${message}`
    );
    form.reset();

    //   try {
    //     const response = await fetch("http://localhost:3000/", {
    //       method: "POST",
    //       mode: "no-cors",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     });

    //     if (response.ok) {
    //       console.log("Formulaire envoyé avec succès !");
    //     } else {
    //       console.error("Erreur lors de l'envoi");
    //     }
    //   } catch (error) {
    //     console.error("Erreur réseau :", error);
    //   }
    //   form.reset();
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

          <form action="/form" onSubmit={handleSubmit} method="GET">
            <label htmlFor="userName"></label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Nom"
              // required
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              // required
            />

            <label htmlFor="phoneNumber"></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Téléphone"
              // required
            />

            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              placeholder="Besoin d’informations ? Notre équipe est là pour vous aider."
              // required
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}
