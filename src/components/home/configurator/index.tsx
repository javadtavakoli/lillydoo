import useInitialize from "../../../hooks/initialize";
import TypeSelector from "../typeSelector";
import LineSelector from "../lineSelector";
import SizeSelector from "../sizeSelector";
import ProductImage from "../productImage";
import ProductFeatures from "../productFeatures";
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
          <ProductFeatures />
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
