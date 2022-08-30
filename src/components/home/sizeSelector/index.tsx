import { useGetProducts, useGetSelectedProduct } from "../../../hooks/products";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { configurationActions } from "../../../slices/configurations/slice";
import "./styles.scss";
const SizeSelectorComponent = () => {
  const { products } = useGetProducts();
  const { productIndex, productType } = useAppSelector(
    (state) => state.configurations
  );
  const dispatch = useAppDispatch();
  const { selectedProduct } = useGetSelectedProduct();
  if (!products) return <></>;
  const productsCount = products?.length;
  const setProductIndex = (index: number) => {
    if (index < productsCount && index >= 0) {
      dispatch(configurationActions.changeProduct(index));
    }
  };

  return (
    <div className="size-selector__row">
      <div className="size-selector__title-col">
        <div className="size-selector__title">Größe</div>
        <div className="size-selector__quantity">
          {selectedProduct?.quantityPerPack}{" "}
          {productType === "pants" ? "Pants" : "Windlen"}
        </div>
      </div>
      <div className="size-selector__buttons-container">
        <button
          className="size-selector__button"
          onClick={() => setProductIndex(productIndex - 1)}
          disabled={productIndex === 0}
        >
          -
        </button>
        <div className="size-selector__slider">
          {products.map((product, i) => (
            <div
              className={`size-selector__info ${
                i > productIndex
                  ? "size-selector__info--after"
                  : i < productIndex
                  ? "size-selector__info--before"
                  : ""
              }`}
            >
              <div className="size-selector__number">
                N° {product.sizeNumber}
              </div>
              <div className="size-selector__desc">{product.weight}</div>
            </div>
          ))}
        </div>
        <button
          className="size-selector__button"
          onClick={() => setProductIndex(productIndex + 1)}
          disabled={productIndex === productsCount - 1}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SizeSelectorComponent;
