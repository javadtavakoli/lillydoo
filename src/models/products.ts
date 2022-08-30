export type ProductType = "diapers" | "pants";
export interface ISubscriptionInfoResponse {
  subscriptionProducts: ISubscriptionProduct[];
  pricePerSubscription: IPricePerSubscription;
}
export interface ISubscriptionProduct {
  productTypeName: ProductType;
  isSelectedByDefault: boolean;
  products: IProduct[];
}
export interface IProduct {
  quantity: number;
  isDefault: boolean;
  quantityPerPack: number;
  isDefaultSize: boolean;
  variants: IProductVariant[];
  sizeNumber: number;
  weight: string;
  productType: ProductType;
}
export interface IProductVariant {
  sku: string;
  sizeNumber: number;
  quantity: number;
  pricePerProduct: IVariantPricePerProduct;
}
export interface IVariantPricePerProduct {
  subscriptionPrice: number;
  discountedPrice: number;
  regularPrice: number;
  pricePerUnit: number;
  pricePerPack: number;
  packCount: number;
}
export interface IPricePerSubscription {
  subscriptionPrice: number;
  discountedPrice: number;
  regularPrice: number;
  pricePerUnit: number;
  pricePerPack: number;
  packCount: number;
}
