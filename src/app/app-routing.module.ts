import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'viewProduct/:id', component: ProductDetailsComponent },
  { path: 'products/category/:category', component: ProductListComponent },
  { path: 'products/brand/:brand', component: ProductListComponent },
  { path: 'products/search/:searchTerm', component: ProductListComponent },
  { path: 'products/type/:type', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
