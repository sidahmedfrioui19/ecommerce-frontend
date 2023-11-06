import { Component } from '@angular/core';
import { ICartItem } from 'src/app/core/models/cartItem.entity';
import { ICategory } from 'src/app/core/models/category.entity';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public categories: ICategory[] = [];
  public cartItems: ICartItem[] = [];

  constructor(private productService: ProductService, public cartService: CartService) {}

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



  getCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  ngOnInit(): void {
    this.getCategories();
    this.cartItems = this.cartService.getCartItems();
  }
}
