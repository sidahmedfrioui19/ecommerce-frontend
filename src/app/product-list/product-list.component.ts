import { Component, OnInit } from '@angular/core';
import { ICartItem } from '../core/models/cartItem.entity';
import { ProductService } from '../core/services/product.service';
import { ICategory } from '../core/models/category.entity';
import { IProduct } from '../core/models/product.entity';
import { IStore } from '../core/models/store.entity';
import { CartService } from '../core/services/cart.service';
import { StoreService } from '../core/services/store.service';
import { NavbarComponent } from '../partials/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = [];
  public filtered: IProduct[] = [];
  public categories: ICategory[] = [];
  public stores: IStore[] = [];
  public colors: string[] = ['Black', 'White','Silver','Blue'];
  public brandId: any;
  public categoryId: any;
  public searchTerm: any;
  public typeId: any;

  constructor(
    public productService: ProductService,
    public cartService: CartService,
    public navbar: NavbarComponent,
    public storeService: StoreService,
    public route: ActivatedRoute
  ) {}

  public cartItems: ICartItem[] = this.cartService.getCartItems();

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (d) => {
        this.products = d;
        console.log(this.typeId);
        if(this.categoryId) {
          this.filtered = this.products.filter((product) => {
            return product.category.id == this.categoryId;
          });
        }
        if(this.brandId) {
          this.filtered = this.products.filter((product) => {
            if(product.store) {
              return product.store.id == this.brandId;
            } else {
              return null;
            }
          });
        }
        if(this.typeId) {
          this.filtered = this.products.filter((product) => {
            if(product.store) {
              return product.type.id == this.typeId;
            } else {
              return null;
            }
          });
        }
        if(this.searchTerm) {
          this.filtered = this.products.filter((product) => {
            return product.name === this.searchTerm || product.category.name === this.searchTerm || product.store.name === this.searchTerm;
          });
        }
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

  getStores() {
    this.storeService.getStores().subscribe({
      next: (d) => {
        this.stores = d;
      },
      error: (e) => {
        throw e;
      }
    })
  }

  getFilters() {
    this.route.params.subscribe(params => {
      const category = params['category'];
      const brand = params['brand'];
      const searchTerm = params['searchTerm'];
      const type = params['type'];

      if (category) {
        this.categoryId = category;
      }
      if (brand) {
        this.brandId = brand;
      }
      if (searchTerm) {
        this.searchTerm = searchTerm;
      }
      if (type) {
        this.typeId = type;
      }
    });
  }

  filter() {

  }

  addToCart(item: IProduct) {
    this.cartService.addItem(item);
    this.navbar.getCartItems();
  }

  ngOnInit() {
    this.getCategories();
    this.getStores();
    this.getProducts();
    this.getFilters();
  }

}
