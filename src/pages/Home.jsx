import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-text">
          <h1>
            <ul className="list">
              <li className="list-item">Fabrication</li>
              <li className="list-item">Vente</li>
              <li className="list-item">Installation</li>
            </ul>
            de menuiseries PVC, ALU et BOIS basée sur Lyon.
          </h1>
          <p>
            Nous vous offrons une large gamme de menuiseries PVC, ALU et BOIS de
            haute qualité à prix coûtant. Entreprise à taille humaine, la
            gestion de votre projet sera faite du métrage à l’installation par
            le même interlocuteur disponible H24 et 7/7!
          </p>
          <Link to="/contact">
            <button className="btn-contact">
              <span>
                Une idée ? <br />
                Une question ?
              </span>
              <span>Contactez-nous</span>
            </button>
          </Link>
        </div>
        <img src="/public/img/logoem.jpg" alt="" />
      </div>
    </>
  );
}
