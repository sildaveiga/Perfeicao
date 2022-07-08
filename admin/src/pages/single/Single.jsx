import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Modifier</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://ae01.alicdn.com/kf/Hfe9ac1d9e28e40c4a666b4642ce64c29E/Serviette-de-plage-imprim-e-de-dessin-anim-pour-fille-africaine-serviette-de-douche-magique-color.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Keiza Da Veiga</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">keizadaveiga16@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Téléphone:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adresse:</span>
                  <span className="itemValue">18 rue de paris</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Pays:</span>
                  <span className="itemValue">France</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Dépenses des utilisateurs (6 derniers mois)"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Dernières transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
