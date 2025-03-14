import yoga from "../assets/img/yoga.svg";
import swimming from "../assets/img/swimming.svg";
import bike from "../assets/img/bike.svg";
import weight from "../assets/img/weight.svg";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <>
      <aside className="main__sidebar">
        <div className="main__sidebar__button-wrapper">
          <img
            className="main__sidebar__button-wrapper__button"
            src={yoga}
            alt="logo personne faisant du yoga"
          />
          <img
            className="main__sidebar__button-wrapper__button"
            src={swimming}
            alt="logo personne nageant"
          />
          <img
            className="main__sidebar__button-wrapper__button"
            src={bike}
            alt="logo personne faisant du vélo"
          />
          <img
            className="main__sidebar__button-wrapper__button"
            src={weight}
            alt="logo d'une haltère"
          />
        </div>
        <small className="main__sidebar__copyright">
          Copiryght, SportSee 2020
        </small>
      </aside>
    </>
  );
}

export default Sidebar;
