import "./styles.scss";
import SelectorButton from "../selectorButton";
import { useState } from "react";

const TypeSelectorComponent = () => {
  const [selectedType, setSelectedType] = useState<"patns" | "diapers">();

  return (
    <div className="type-selector">
      <div className="type-selector__button-title">Passform</div>
      <div className="type-selector__buttons-row">
        <SelectorButton
          onClick={() => setSelectedType("diapers")}
          active={selectedType === "diapers"}
        >
          <div className="type-selector__diaper-icon"></div> Windlen
        </SelectorButton>
        <SelectorButton
          onClick={() => setSelectedType("patns")}
          active={selectedType === "patns"}
        >
          <div className="type-selector__pant-icon"></div> Pants
        </SelectorButton>
      </div>
    </div>
  );
};
export default TypeSelectorComponent;
