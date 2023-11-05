import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { IProduct } from "../models/product.entity";
import { Observable } from "rxjs";
import { ICategory } from "../models/category.entity";

@Injectable()
export class ProductService {
  constructor(private http: HttpService) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get('products', false);
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get('categories', false);
  }
}
