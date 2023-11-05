import { Component } from '@angular/core';
import { ICategory } from 'src/app/core/models/category.entity';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public categories: ICategory[] = [];

  constructor(private productService: ProductService) {}

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
    this.getCategories();
  }
}
