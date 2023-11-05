import { Component } from '@angular/core';
import { IProduct } from '../core/models/product.entity';
import { ProductService } from '../core/services/product.service';
import { ICategory } from '../core/models/category.entity';
import { CartService } from '../core/services/cart.service';
import { ICartItem } from '../core/models/cartItem.entity';
import { NavbarComponent } from '../partials/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public products: IProduct[] = [];
  public categories: ICategory[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private navbar: NavbarComponent
  ) {}

  public cartItems: ICartItem[] = this.cartService.getCartItems();

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

  addToCart(item: IProduct) {
    this.cartService.addItem(item);
    this.navbar.getCartItems();
    console.log(this.cartService.getCurrentItemsLength());
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
}
