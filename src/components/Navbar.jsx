import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/realisations">Nos réalisations</NavLink>
      <NavLink to="/partenaires">Nos partenaires</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
