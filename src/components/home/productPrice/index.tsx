import { useGetSelectedVariant } from "../../../hooks/products";
import "./styles.scss";
const ProductPriceComponent = () => {
  const { selectedVariant } = useGetSelectedVariant();
  return (
    <div className="product-price">
      <span className="product-price--line">
        {selectedVariant?.pricePerProduct.regularPrice} €
      </span>{" "}
      {selectedVariant?.pricePerProduct.discountedPrice} €{" "}
      <span className="product-price--accent">(inkl. MwSt)</span>
    </div>
  );
};
export default ProductPriceComponent;
