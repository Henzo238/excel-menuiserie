import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/realisations">Nos réalisations</Link>
      <Link to="/partenaires">Nos partenaires</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
