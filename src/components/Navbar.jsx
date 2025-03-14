import logo from "../assets/img/logo.svg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="header__navbar">
        <img
          className="header__navbar__logo"
          src={logo}
          alt="logo du site SportSee"
        />
        <div className="header__navbar__menu">
          <div className="header__navbar__menu__link">Accueil</div>
          <div className="header__navbar__menu__link">Profil</div>
          <div className="header__navbar__menu__link">Réglage</div>
          <div className="header__navbar__menu__link">Communauté</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
