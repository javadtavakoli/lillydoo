import { useGetSelectedVariant } from "../../../hooks/products";
import { useAppSelector } from "../../../hooks/reduxHooks";
import "./styles.scss";
const ProductFeaturesComponent = () => {
  const { selectedVariant } = useGetSelectedVariant();
  const { productLine, productType } = useAppSelector(
    (state) => state.configurations
  );
  return (
    <ul className="product-features">
      <li>
        6 Packungen, <strong>alle 4 Wochen</strong>
      </li>
      <li>
        <strong>100% flexibel</strong>| jederzeit kündbar
      </li>
      <li>
        Unsere{" "}
        <strong>
          {productLine === "Regular" ? "hautfreundlichen" : "plastikneutralisierten"}
        </strong>{" "}
        {productType === "diapers" ? "Windlen" : "Pants"}
      </li>
      <li>
        <strong>{selectedVariant?.pricePerProduct.pricePerUnit} €</strong>/
        Packung ({selectedVariant?.pricePerProduct.pricePerPack} €/Windel)
      </li>
    </ul>
  );
};
export default ProductFeaturesComponent;
