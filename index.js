import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/src/pages/Contact.jsx");
  // res.send("Hello World!");
});
app.get("/form", (req, res) => {
  res.send("Formulaire reçu");
});
app.listen(port, () => console.log("Serveur démarré, port : " + port));
