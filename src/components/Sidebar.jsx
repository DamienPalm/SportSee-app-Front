import "../styles/Sidebar.css";
import yoga from "../assets/img/yoga.svg";
import swimming from "../assets/img/swimming.svg";
import bike from "../assets/img/bike.svg";
import weight from "../assets/img/weight.svg";

function Sidebar() {
  return (
    <aside className="main__sidebar">
      <div className="main__sidebar__buttonWrapper">
        <img
          src={yoga}
          alt="logo personne faisant du yoga"
          className="main__sidebar__buttonWrapper__button"
        />
        <img
          src={swimming}
          alt="logo de personne nageant"
          className="main__sidebar__buttonWrapper__button"
        />
        <img
          src={bike}
          alt="logo personne faisant du vélo"
          className="main__sidebar__buttonWrapper__button"
        />
        <img
          src={weight}
          alt="logo d'une haltère"
          className="main__sidebar__buttonWrapper__button"
        />
      </div>
      <small className="main__sidebar__copyright">
        Copyright, SportSee 2020
      </small>
    </aside>
  );
}

export default Sidebar;
