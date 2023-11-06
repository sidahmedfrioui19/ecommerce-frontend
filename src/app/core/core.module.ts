import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpService } from "./http/http.service";
import { ProductService } from "./services/product.service";
import { HttpClient } from "@angular/common/http";
import { CartService } from "./services/cart.service";
import { StoreService } from "./services/store.service";

@NgModule({
  declarations: [],
  providers: [
    HttpService,
    ProductService,
    HttpClient,
    CartService,
    StoreService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {}
