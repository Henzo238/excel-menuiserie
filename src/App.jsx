import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}
