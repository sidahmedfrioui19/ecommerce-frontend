import { ISubcategory } from "./subcategory.entity";

export interface ICategory {
  id: string;
  name: string;
  pictureUrl: string;
  subcategories: ISubcategory[];
};
