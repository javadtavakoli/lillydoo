import "./styles.scss";
import { useGetSelectedProduct } from "../../../hooks/products";
import { useAppSelector } from "../../../hooks/reduxHooks";
const ProductImageComponent = () => {
  const { selectedProduct } = useGetSelectedProduct();
  const { productLine } = useAppSelector((state) => state.configurations);
  return (
    <img
      src={`/assets/images/configurator/${
        selectedProduct?.productType
      }-${productLine.toLowerCase()}_size${selectedProduct?.sizeNumber}.png`}
      alt={`${selectedProduct?.productType} ${productLine} Size ${selectedProduct?.sizeNumber}`}
      className="product-image"
    />
  );
};
export default ProductImageComponent;
