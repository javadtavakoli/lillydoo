import "./styles.scss";
const ConfiguratorComponent = () => {
  return (
    <div className="configurator">
      <div className="configurator__title">4 Klicks zu Deinem Windel-Abo</div>
      <div className="configurator_inner">
        <div className="configurator__product-information">
          <img
            src={"/assets/images/configurator/diapers-regular_size4.png"}
            alt="Dipers Regular Size 4"
            className="configurator__product-image"
          />
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
      </div>
    </div>
  );
};
export default ConfiguratorComponent;
