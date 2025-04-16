import { MailtrapClient } from "mailtrap";
import express from "express";
import bodyParser from "body-parser";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("form")).addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    const CLIENT = document.getElementById("client").value;
    const EMAIL = document.getElementById("email").value;
    const PHONENUMBER = document.getElementById("phoneNumber").value;
    const MESSAGE = document.getElementById("message").value;

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData.entries());

    const app = express();
    const port = 3000;

    app.use(bodyParser.json());

    const TOKEN = "f8cc00f540c0767affe7326647e8c5c2";
    const clientMail = new MailtrapClient({
      token: TOKEN,
    });

    app.get("/", (req, res) => {
      const {
        client: CLIENT,
        email: EMAIL,
        phoneNumber: PHONENUMBER,
        message: MESSAGE,
      } = req.body;
      res.json({
        client: CLIENT,
        email: EMAIL,
        phoneNumber: PHONENUMBER,
        message: MESSAGE,
      });
    });
    app.post("/send-email", async (req, res) => {
      const {
        client: CLIENT,
        email: EMAIL,
        phoneNumber: PHONENUMBER,
        message: MESSAGE,
      } = req.body;

      if (!CLIENT || !EMAIL || !PHONENUMBER || !MESSAGE) {
        return res.status(400).send("Tous les champs sont requis.");
      }

      try {
        const sender = {
          email: "hello@demomailtrap.co",
          name: "Mailtrap Test",
        };
        const recipients = [
          {
            email: "henzo.g@hotmail.fr",
          },
        ];

        await clientMail.send({
          from: sender,
          to: recipients,
          subject: "Message de test",
          text: `Bonjour, ceci est un message de test.`,
          category: "EM",
        });
        res.status(200).send("E-mail envoyé avec succès !");
      } catch (error) {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
        res.status(500).send("Erreur lors de l'envoi de l'e-mail.");
      }
    });

    app.listen(port, () => console.log("Serveur démarré sur le port 3000"));
  }
);
