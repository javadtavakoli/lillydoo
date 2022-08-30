import { useMemo } from "react";
import { useAppSelector } from "./reduxHooks";

export const useGetProducts = () => {
  const { subscriptions } = useAppSelector((state) => state);
  const { productType } = useAppSelector((state) => state.configurations);
  const products = useMemo(
    () =>
      subscriptions.find((s) => s.productTypeName === productType)?.products,
    [subscriptions, productType]
  );
  return { products };
};
export const useGetSelectedProduct = () => {
  const { products } = useGetProducts();
  const { productIndex } = useAppSelector((state) => state.configurations);
  const selectedProduct = useMemo(
    () => products && products[productIndex],
    [productIndex, products]
  );
  return { selectedProduct };
};
export const useGetSelectedVariant = () => {
  const { selectedProduct } = useGetSelectedProduct();
  const { productLine } = useAppSelector((state) => state.configurations);
  const selectedVariant = useMemo(
    () =>
      selectedProduct?.variants.find((v) =>
        productLine === "Green" ? v.sku.startsWith("G") : v.sku.startsWith("E")
      ),
    [productLine, selectedProduct]
  );
  return { selectedVariant };
};
