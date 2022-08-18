import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ptoduct{
  id:number,
  title:string,
  price:string,
  category:string,
  description:string,
  image:string,
  ammount?:number
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl='https://fakestoreapi.com/'
  constructor(private _http:HttpClient) { }
  getAllProdut():Observable<any>{
    return this._http.get(this.baseUrl+ 'products')
  }
  getAllCategeries():Observable<any>{
    return this._http.get(this.baseUrl+'products/categories')
  }
  getProductsByCategery(keyword:any):Observable<any>{
    return this._http.get(this.baseUrl+'products/category/'+keyword)
  }
  getProductsById(id:any):Observable<any>{
    return this._http.get(this.baseUrl+'products/'+id)
  }
}
