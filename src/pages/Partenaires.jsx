const partenaires = [
  {
    name: "Aluplast",
    logo: "/src/assets/img/partenaires/aluplast.avif",
    description: "Description du partenaire 1",
  },
  {
    name: "La Toulousaine",
    logo: "/src/assets/img/partenaires/La toulousaine.avif",
    description: "Description du partenaire 2",
  },
  {
    name: "Somfy",
    logo: "/src/assets/img/partenaires/somfy.avif",
    description: "Description du partenaire 3",
  },
  {
    name: "Saint-Gobain",
    logo: "/src/assets/img/partenaires/ST-GOBAIN_.avif",
    description: "Description du partenaire 3",
  },
  {
    name: "Tordjman",
    logo: "/src/assets/img/partenaires/tordjman.avif",
    description: "Description du partenaire 3",
  },
  {
    name: "Wicona",
    logo: "/src/assets/img/partenaires/wicona_edited.avif",
    description: "Description du partenaire 3",
  },
];

const Partenaires = () => {
  return (
    <div className="partenaires">
      <h1>Nos partenaires</h1>
      <p>
        Année après année, Excel Menuiseries n'a cessé d’évoluer pour servir au
        mieux les besoins de ses clients. Nous sommes toujours fidèles à notre
        volonté de travailler en étroite collaboration avec les plus brillantes
        et les plus talentueuses usines du milieu. Prenez quelques minutes pour
        en savoir plus sur nos précieux partenaires
      </p>
      <div className="partenaires-list">
        {partenaires.map((partenaire) => (
          <div key={partenaire.name} className="partenaire">
            <img src={partenaire.logo} alt={partenaire.name} />
            <h2>{partenaire.name}</h2>
            <p>{partenaire.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Partenaires;
