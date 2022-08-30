import "./styles.scss";
import SelectorButton from "../../selectorButton";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { ProductType } from "../../../models/products";
import { configurationActions } from "../../../slices/configurations/slice";

const TypeSelectorComponent = () => {
  const { productType } = useAppSelector((state) => state.configurations);
  const dispatch = useAppDispatch();
  const setProductType = (_productType: ProductType) => {
    dispatch(configurationActions.changeType(_productType));
  };
  return (
    <div className="type-selector">
      <div className="type-selector__button-title">Passform</div>
      <div className="type-selector__buttons-row">
        <SelectorButton
          onClick={() => setProductType("diapers")}
          active={productType === "diapers"}
        >
          <div className="type-selector__diaper-icon"></div> Windlen
        </SelectorButton>
        <SelectorButton
          onClick={() => setProductType("pants")}
          active={productType === "pants"}
        >
          <div className="type-selector__pant-icon"></div> Pants
        </SelectorButton>
      </div>
    </div>
  );
};
export default TypeSelectorComponent;
