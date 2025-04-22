import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

const TOKEN = "50f6b1d4c0b6a51c13c6df5eb7f4cddb";

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

const sender = {
  address: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};
const recipients = ["henzo.g@hotmail.fr"];

transport
  .sendMail({
    from: sender,
    to: recipients,
    subject: "Un message provenant de EM",
    text: "Bonjour, ceci est un message de test",
    category: "Integration Test",
  })
  .then(console.log, console.error);
