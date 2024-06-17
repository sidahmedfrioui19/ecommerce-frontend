import { IProduct } from "./product.entity";

export interface IStore {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  products: IProduct[];
};
