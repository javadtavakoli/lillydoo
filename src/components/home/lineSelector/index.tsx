import "./styles.scss";
import SelectorButton from "../../selectorButton";
import { useState } from "react";

const LineSelectorComponent = () => {
  const [lineSelector, setLineSelector] = useState<"regular" | "green">();
  return (
    <div className="line-selector">
      <div className="line-selector__button-title">Windellinie</div>
      <div className="line-selector__buttons-row">
        <SelectorButton
          onClick={() => setLineSelector("regular")}
          active={lineSelector === "regular"}
        >
          <img
            src="/assets/images/configurator/lillydoo-logo-regular.svg"
            className="line-selector__button-image"
            alt="Lillydoo regular"
          />
        </SelectorButton>
        <SelectorButton
          onClick={() => setLineSelector("green")}
          active={lineSelector === "green"}
        >
          <img
            src="/assets/images/configurator/lillydoo-logo-green.svg"
            className="line-selector__button-image"
            alt="Lillydoo green"
          />
        </SelectorButton>
      </div>
    </div>
  );
};
export default LineSelectorComponent;
