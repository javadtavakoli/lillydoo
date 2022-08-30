import "./styles.scss";
import SelectorButton from "../../selectorButton";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { ProductLines } from "../../../slices/configurations/types";
import { configurationActions } from "../../../slices/configurations/slice";

const LineSelectorComponent = () => {
  const { productLine } = useAppSelector((state) => state.configurations);
  const dispatch = useAppDispatch();
  const setProductLine = (_productLine: ProductLines) => {
    dispatch(configurationActions.changeLine(_productLine));
  };
  return (
    <div className="line-selector">
      <div className="line-selector__button-title">Windellinie</div>
      <div className="line-selector__buttons-row">
        <SelectorButton
          onClick={() => setProductLine("Regular")}
          active={productLine === "Regular"}
        >
          <img
            src="/assets/images/configurator/lillydoo-logo-regular.svg"
            className="line-selector__button-image"
            alt="Lillydoo regular"
          />
        </SelectorButton>
        <SelectorButton
          onClick={() => setProductLine("Green")}
          active={productLine === "Green"}
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
