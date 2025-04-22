import Navbar from "./Navbar";
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

        {/* <img
          src="/src/assets/img/logoem-text.jpg"
          className="icon-txt"
          alt="Logo-txt"
        /> */}
        <Navbar />
      </div>
    </header>
  );
}
