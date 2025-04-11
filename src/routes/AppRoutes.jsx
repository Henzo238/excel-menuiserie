import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import Partenaires from "../pages/Partenaires.jsx";
import Realisations from "../pages/Realisations.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partenaires" element={<Partenaires />} />
      <Route path="/realisations" element={<Realisations />} />
    </Routes>
  );
}
