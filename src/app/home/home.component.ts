import { Component } from '@angular/core';
import { IProduct } from '../core/models/product.entity';
import { ProductService } from '../core/services/product.service';
import { ICategory } from '../core/models/category.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public products: IProduct[] = [];
  public categories: ICategory[] = [];

  constructor(private productService: ProductService) {}

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (d) => {
        this.products = d;
      },
      error: (e) => {
        throw e;
      }
    })
  }

  getCategories() {
    this.productService.getCategories().subscribe({
      next: (d) => {
        this.categories = d;
      },
      error: (e) => {
        throw e;
      }
    })
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
}
