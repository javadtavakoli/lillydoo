import "./styles.scss";
const MenuComponent = () => {
  return (
    <nav className="menu">
      <div className="menu__inner">
        <div className="menu__logo">
          <a href="/">
            <img alt="Lillydoo big logo" src={"/assets/images/header/lillydoo-logo-white.svg"} />
          </a>
        </div>
        <div className="menu__middle">
          <ul>
            <li>GRATIS TESTPAKET</li>
            <li>FLEXIBLES ABO</li>
            <li>Produkte</li>
          </ul>
        </div>
        <div className="menu__right">
        <ul>
            <li>Magazin</li>
            <li>Über Lillydoo</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default MenuComponent;
