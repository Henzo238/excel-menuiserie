import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/public/img/logoem-icon.jpg" className="icon" alt="Logo" />
        </Link>

        <Navbar />
      </div>
    </header>
  );
}
