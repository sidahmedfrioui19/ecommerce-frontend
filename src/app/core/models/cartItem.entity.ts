import { IProduct } from "./product.entity";

export interface ICartItem {
  id: number;
  item: IProduct;
  quantity: number;
  totalPrice: number;
}
