import Navbar from "./Navbar";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src="/src/assets/img/logoem-icon.jpg"
          className="icon"
          alt="Logo"
        />

        <Navbar />
      </div>
    </header>
  );
}
