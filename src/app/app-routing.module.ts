import { CheckoutShippingComponent } from './checkout-shipping/checkout-shipping.component';
import { CartComponent } from './cart/cart.component';
import { ProductsPageComponent } from './products-page/products-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path : '', redirectTo : 'products', pathMatch : 'full' },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path : 'products', component : ProductsPageComponent},
  { path : 'cart', component : CartComponent },
  { path : 'checkout', component : CheckoutShippingComponent, canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
