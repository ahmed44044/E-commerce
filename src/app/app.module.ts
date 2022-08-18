import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { SpinerComponent } from './spiner/spiner.component';
import { SelectComponent } from './select/select.component';
import { Product1Component } from './product1/product1.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    ProductDetailsComponent,
    HeaderComponent,
    SpinerComponent,
    SelectComponent,
    Product1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
