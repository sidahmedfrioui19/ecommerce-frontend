import { ISubcategory } from "./subcategory.entity";

export interface IType {
  id: string;
  name: string;
  pictureUrl: string;
  parentSubCategory: ISubcategory;
};
