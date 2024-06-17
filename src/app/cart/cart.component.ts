import { Component } from '@angular/core';
import { ICartItem } from '../core/models/cartItem.entity';
import { CartService } from '../core/services/cart.service';
import { NavbarComponent } from '../partials/navbar/navbar.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public items: ICartItem[] = [];

  constructor(public cartService: CartService, public navbar: NavbarComponent) {}

  getCurrentCartItems() {
    this.items = this.cartService.getCartItems();
    this.navbar.getCartItems();
  }

  increaseQty(itemId: number) {
    this.cartService.increaseQuantity(itemId);
    this.getCurrentCartItems();
  }

  decreaseQty(itemId: number) {
    this.cartService.decreaseQuantity(itemId);
    this.getCurrentCartItems();
  }

  deleteItem(itemId: number) {
    this.cartService.deleteItem(itemId);
    this.getCurrentCartItems();
  }

  ngOnInit(): void {
    this.getCurrentCartItems();
  }
}
