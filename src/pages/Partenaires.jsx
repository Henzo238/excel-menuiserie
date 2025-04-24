const partenaires = [
  {
    name: "Aluplast",
    logo: "/public/img/partenaires/aluplast.avif",
    site: "https://www.aluplast.net/fr/",
  },
  {
    name: "La Toulousaine",
    logo: "/public/img/partenaires/La toulousaine.avif",
    site: "https://www.la-toulousaine.com/fr/",
  },
  {
    name: "Somfy",
    logo: "/public/img/partenaires/somfy.avif",
    site: "https://www.somfy.fr/",
  },
  {
    name: "Saint-Gobain",
    logo: "/public/img/partenaires/ST-GOBAIN_.avif",
    site: "https://www.saint-gobain.com/fr",
  },
  {
    name: "Tordjman",
    logo: "/public/img/partenaires/tordjman.avif",
    site: "https://www.tordjmanmetal.fr/",
  },
  {
    name: "Wicona",
    logo: "/public/img/partenaires/wicona_edited.jpg",
    site: "https://www.wicona.com/fr/fr/",
  },
];

const Partenaires = () => {
  return (
    <div className="partenaires">
      <p>
        Année après année, Excel Menuiseries n'a cessé d’évoluer pour servir au
        mieux les besoins de ses clients. Nous sommes toujours fidèles à notre
        volonté de travailler en étroite collaboration avec les plus brillantes
        et les plus talentueuses usines du milieu. Prenez quelques minutes pour
        en savoir plus sur nos précieux partenaires
      </p>
      <div className="partenaires-list">
        {partenaires.map((partenaire) => (
          <div key={partenaire.name} className="partenaires-card">
            <a href={partenaire.site} target="_blank" rel="noopener noreferrer">
              <img src={partenaire.logo} alt={partenaire.name} />
            </a>
            <h2>{partenaire.name}</h2>
            <p>{partenaire.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Partenaires;
