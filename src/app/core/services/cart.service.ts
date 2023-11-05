import { Injectable } from "@angular/core";
import { ICartItem } from "../models/cartItem.entity";
import { IProduct } from "../models/product.entity";

@Injectable()
export class CartService {
  private items: ICartItem[] = [];
  private lastId: number = 0;

  constructor() {}

  getCartItems() {
    return [...this.items];
  }

  getCurrentItemsLength() {
    return this.items.length;
  }

  getCurrentTotal() {
    return this.items.reduce((total, item) => total + (item.item.price * item.quantity), 0);
  }

  addItem(item: IProduct) {
    let newItem: ICartItem = {
      id: this.lastId++,
      item: item,
      quantity: 1,
      totalPrice: item.price
    };
    this.items = [...this.items, newItem];
  }

  increaseQuantity(itemId: number) {
    if (this.items[itemId]) {
      this.items = this.items.map((item, index) =>
        index === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
  }

  decreaseQuantity(itemId: number) {
    if (this.items[itemId] && this.items[itemId].quantity > 0) {
      this.items = this.items.map((item, index) =>
        index === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  }

  deleteItem(itemId: number) {
    if (this.items[itemId]) {
      this.items = this.items.filter((item, index) => index !== itemId);
    }
  }

  selectColor(itemId: number, selectedColor: string) {
    if (this.items[itemId]) {
      this.items = this.items.map((item, index) =>
        index === itemId ? { ...item, item: { ...item.item, colors: [selectedColor] } } : item
      );
    }
  }
}
