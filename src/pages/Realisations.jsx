const realisations = [
  {
    id: 1,
    title: "Les fenêtres PVC",
    description:
      "Résistante, esthétique, entretient facile, économique et 100 % recyclable, notre Fenêtre  PVC offre des atouts et des qualités incontestables. Si vous recherchez un compromis entre qualité, efficacité thermique et prix du produit, vous serez séduit par nos fenêtres PVC IDEAL 4000, profilé ALUPLAST 6 chambres d’isolation, dormant 70 mm de profondeur, renfort en acier galvanisé sur l’ensemble de la menuiserie. Double ou triple vitrage, oscilo battant avec système anti-fausse manoeuvre, possibilité d’ailes de recouvrement de 40 à 65 mm en cas de rénovation. ",
    image: "/public/img/fenêtres.avif",
  },
  {
    id: 2,
    title: "Les portes d'entrée PVC &ALU EKO LINE",
    description:
      "La porte d’entrée est une véritable carte de visite pour votre demeure. Design moderne, liberté dans le choix des fournitures et une large palette de couleurs offrent aux panneaux de porte EkoLine une carte de visite remarquable pour chaque entrée. Les matériaux de haute qualité garantissent sécurité et durabilité. Son remplissage isole parfaitement votre habitation et répond à toutes les exigences techniques.",
    image: "/public/img/porte-entrée.avif",
  },
  {
    id: 3,
    title: "Les volets roulants, OVC & ALU",
    description:
      "Les volets roulants sont de plus en plus utilisés depuis ces dernières années. Simple à installer, résistants avec la possibilité de les motorisés Ils offrent une excellente isolation que les volets soient en PVC ou en ALU, une fois fermé il assure une isolation presque parfaite sans courant d’air, Une sécurité assurée : 90% des nouveaux volets roulants sont associés à des systèmes anti-intrusion qui empêchent le crochetage, voire l’arrachage ou le soulèvement des volets. Dans l’offre Aluprof vous trouverez des caissons de trois formes différentes : carré (coupé sous un angle de 45°), ovale et semi-ovale, ce qui permet une adaptation à la forme de la façade. Le recours au système Moskito, qui fonctionne indépendamment du volet, assure une protection supplémentaire de l’intérieur du bâtiment contre les insectes, tout en laissant pénétrer l’air et la lumière.",
    image: "/public/img/volet-roulant.avif",
  },
  {
    id: 4,
    title: "Les vitrages",
    description:
      "L’assemblage en double, triple voir quadruple vitrages, permet d’obtenir des propriétés d’isolation de plus en plus élevées. La sécurité est garantie par divers feuilletages possibles, l’intimité par des vitrages imprimés.",
    image: "/public/img/vitrage.avif",
  },
  {
    id: 5,
    title: "Les portes de garage sectionnelles",
    description:
      "Notre offre de portes de garage est la meilleure solution de classe Premium sur le marché. Les portes de garage Infinity Design, dans la version standard, sont équipées d’éléments renforçant la structure et améliorant l’étanchéité périphérique. Elles garantissent la durabilité et la sécurité d’utilisation. Une large gamme de couleurs, d’hublots et de décors disponibles nous permet de satisfaire même les clients les plus exigeants. Nos portes de garage sont équipées de panneaux avec la technologie FINGERSAFE assurant la sécurité anti-pincement. Pour leur fabrication, nous utilisons uniquement les composants de qualité supérieure en acier galvanisé haut de gamme.",

    image: "/public/img/porte-garage.avif",
  },
];

export default function Realisations() {
  return (
    <div className="realisations">
      <div className="realisations-list">
        {realisations.map((realisation) => (
          <div key={realisation.id} className="realisation">
            <img src={realisation.image} alt={realisation.title} />
            <div className="realisation-overlay">
              <h2>{realisation.title}</h2>
              <p>{realisation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
