import lilidooLogo from "../../../assets/images/header/lilydooo-logo-white.svg";
import "./styles.scss";
const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo-container">
          <img src={lilidooLogo} />
        </div>
        <div className="header__menu-container">Menu</div>
      </div>
    </header>
  );
};
export default HeaderComponent;
