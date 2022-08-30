import useInitialize from "../../../hooks/initialize";
import TypeSelector from "../typeSelector";
import LineSelector from "../lineSelector";
import SizeSelector from "../sizeSelector";
import ProductImage from "../productImage";
import "./styles.scss";
const ConfiguratorComponent = () => {
  useInitialize();
  return (
    <div className="configurator">
      <div className="configurator__title">4 Klicks zu Deinem Windel-Abo</div>
      <div className="configurator__inner">
        <div className="configurator__product-information">
          <ProductImage />
          <div className="configurator__product-description">
            Du willst mehr Auswahlmöglichkeiten?
          </div>
          <div className="configurator__product-description">
            Hier kommst du zu unserem Abo Konfigurator.
          </div>
          <div className="configurator__separator-line"></div>
          <ul className="configurator__product-features">
            <li>
              6 Packungen, <strong>alle 4 Wochen</strong>
            </li>
            <li>
              <strong>100% flexibel</strong>| jederzeit kündbar
            </li>
            <li>
              Unsere <strong>hautfreundlichen</strong> Windeln
            </li>
            <li>
              <strong>11,00 €</strong>/ Packung (0,38 €/Windel)
            </li>
          </ul>
        </div>
        <div className="configurator__controls">
          <TypeSelector />
          <SizeSelector />
          <LineSelector />
          <div className="configurator__price">
            <span className="configurator__price--line">66,00 €</span> 49,50 €{" "}
            <span className="configurator__price--accent">(inkl. MwSt)</span>
          </div>
          <div className="configurator__button-row">
            <button className="configurator__button">
              Jetzt Abo Bestellen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfiguratorComponent;
