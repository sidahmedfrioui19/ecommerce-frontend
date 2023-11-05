import { ICategory } from "./category.entity";
import { IType } from "./type.entity";

export interface ISubcategory {
  id: string;
  name: string;
  pictureUrl: string;
  types: IType[];
  parentCategory: ICategory;
};
