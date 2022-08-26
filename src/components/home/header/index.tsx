import "./styles.scss";
import shopIcon from "../../../assets/icons/basket.svg";
import lillydooLogo from "../../../assets/images/header/lillydoo-logo-white.svg";
import vioyLogo from "../../../assets/images/header/vivoy-logo-white.svg"
const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo-container">
          <a href="/" className="header__logo">
            <img
              alt="Lillydoo Logo"
              src={lillydooLogo}
            />
          </a>
          <a href="/" className="header__logo">
            <img
              alt="Vivoy Logo"
              src={vioyLogo}
            />
          </a>
        </div>
        <div className="header__menu-container">
          <ul className="header__menu">
            <li className="header__menu-item--drop-down">
              <a href="/">DE</a>
            </li>
            <li>
              <a href="/">Hilfe</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">
                <img alt="Shop Icon" src={shopIcon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default HeaderComponent;
