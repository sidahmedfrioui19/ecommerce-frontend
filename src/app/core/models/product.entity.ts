import { ICategory } from "./category.entity";
import { IStore } from "./store.entity";
import { ISubcategory } from "./subcategory.entity";
import { IType } from "./type.entity";

export interface IProduct {
  id: string;
  name: string;
  description: string[];
  thumbnailUrl: string;
  firstPictureUrl: string;
  secondPictureUrl: string;
  thirdPictureUrl: string;
  price: number;
  colors: string[];
  store: IStore;
  category: ICategory;
  subcategory: ISubcategory;
  type: IType;
};
