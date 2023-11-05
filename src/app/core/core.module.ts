import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpService } from "./http/http.service";
import { ProductService } from "./services/product.service";
import { HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [],
  providers: [
    HttpService,
    ProductService,
    HttpClient
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {}
