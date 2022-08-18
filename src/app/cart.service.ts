import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl='https://fakestoreapi.com/'
  constructor(private http:HttpClient) { }
  creatNewCart(model:any)
  {
    return this.http.post(this.baseUrl +'carts',model)
  }
}
