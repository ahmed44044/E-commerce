import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"product" , component:ProductComponent},
  {path:"details/:id" , component:ProductDetailsComponent},
  {path:"cart" , component:CartComponent},
  {path:"**",redirectTo:"product" , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
