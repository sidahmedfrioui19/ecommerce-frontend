import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/services/product.service';
import { IProduct } from '../core/models/product.entity';
import { CartService } from '../core/services/cart.service';
import { NavbarComponent } from '../partials/navbar/navbar.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  public product = {} as IProduct;
  public currentPicture: string = '';
  public activeTab: 1 | 2 | 3 = 1;
  public activeUserTab: 1 | 2 = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private navbar: NavbarComponent
  ) {}

  setCurrentPicture(url: string, activeTab: 1 | 2 | 3 ) {
    this.currentPicture = url;
    this.activeTab = activeTab;
  }

  setActive(tab: 1 | 2) {
    this.activeUserTab = tab;
  }

  addToCart(item: IProduct) {
    this.cartService.addItem(item);
    this.navbar.getCartItems();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getById(params['id']).subscribe({
        next: (d) => {
          this.product = d;
          this.currentPicture = this.product.firstPictureUrl
        },
        error: (e) => {
          throw e;
        }
      });
    });
  }
}
