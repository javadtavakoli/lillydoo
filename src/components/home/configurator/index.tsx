import "./styles.scss";
import DiperImage from "../../../assets/images/configurator/dipers-regular_size4.png";
const ConfiguratorComponent = () => {
  return (
    <div className="configurator">
      <div className="configurator__title">4 Klicks zu Deinem Windel-Abo</div>
      <div className="configurator_inner">
        <div className="configurator__product-infomation">
          <img src={DiperImage} />
        </div>
      </div>
    </div>
  );
};
export default ConfiguratorComponent;
