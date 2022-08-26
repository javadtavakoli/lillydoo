import "./styles.scss";
const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo-container">
          <a href="#" className="header__logo">
            <img alt="Lillydoo Logo" src={"assets/images/header/lillydoo-logo-white.svg"} />
          </a>
          <a href="#" className="header__logo">
            <img alt="Vivoy Logo" src={"assets/images/header/vivoy-logo-white.svg"} />
          </a>
        </div>
        <div className="header__menu-container">Menu</div>
      </div>
    </header>
  );
};
export default HeaderComponent;
