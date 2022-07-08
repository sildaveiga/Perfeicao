import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Pays</li>
          <li className="fListItem">Régions</li>
          <li className="fListItem">Villes</li>
          <li className="fListItem">Quartiers</li>
          <li className="fListItem">Aéroports</li>
          <li className="fListItem">Hôtels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Maisons </li>
          <li className="fListItem">Appartements </li>
          <li className="fListItem">Villages de vacances </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Auberges de jeunesse</li>
          <li className="fListItem">Maisons d'hôtes</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Location de voitures </li>
          <li className="fListItem">Recherche de vol</li>
          <li className="fListItem">Réservations de restaurants </li>
          <li className="fListItem">Agents de voyage</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Centre de presse</li>
          <li className="fListItem">Centre de ressources sur la sécurité</li>
          <li className="fListItem">Relations avec les investisseurs</li>
          <li className="fListItem">Termes et conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Perfeicao.</div>
    </div>
  );
};

export default Footer;
