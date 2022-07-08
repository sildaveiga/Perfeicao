import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m du centre</span>
        <span className="siTaxiOp">Taxi aéroport gratuit</span>
        <span className="siSubtitle">Studio avec air conditionné</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Annulation gratuite </span>
        <span className="siCancelOpSubtitle">
          Vous pouvez annuler plus tard, alors profitez de ce prix exceptionnel
          dès aujourd'hui!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">€{item.cheapestPrice}</span>
          <span className="siTaxOp">Taxes et frais inclus</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Voir la disponibilité</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
