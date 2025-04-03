import "../styles/Card.css";

function Cards({ data, icon, alt, name, unit }) {
  return (
    <article className="main__profilSection__profilWrapper__cardKeyDataWrapper__card">
      <img
        src={icon}
        alt={alt}
        className="main__profilSection__profilWrapper__cardKeyDataWrapper__card__icon"
      />
      <div className="main__profilSection__profilWrapper__cardKeyDataWrapper__card__data">
        <p className="main__profilSection__profilWrapper__cardKeyDataWrapper__card__data__value">
          {data}
          {unit}
        </p>
        <p className="main__profilSection__profilWrapper__cardKeyDataWrapper__card__data__name">
          {name}
        </p>
      </div>
    </article>
  );
}

export default Cards;
