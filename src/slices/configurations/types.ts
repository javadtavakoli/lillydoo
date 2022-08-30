import { ProductType } from "../../models/products";
export type ProductLines = "Green" | "Regular";
export interface IConfigurationsState {
  productType: ProductType;
  productIndex: number;
  productLine: ProductLines;
}
