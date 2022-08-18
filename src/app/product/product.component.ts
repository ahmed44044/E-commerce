import { ptoduct } from './../product.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:ptoduct[]=[]
categeries:ptoduct[]=[]
loading:boolean=false
cartProduct:any[] =[]
  constructor(private _Service:ProductService ,private _router:Router) { }

  ngOnInit(): void {
    this.getProducts()
    this.getCategeries()
  }
 getProducts(){
  this.loading = true
  this._Service.getAllProdut().subscribe({
    next:(data:any)=>{
      // console.log(data);
      this.products= data
      this.loading = false
    },
    error:(err:any)=>{
      console.log(err);
      this.loading = false
      
    }
  })
 }
 getCategeries(){
  this.loading = true
  this._Service.getAllCategeries().subscribe({
    next:(data:any)=>{
      // console.log(data);
      this.loading = false
      this.categeries= data
      
    },
    error:(err:any)=>{
      this.loading = false
      // console.log(err);
      
    }
  })
 }
 fillterCategery(event:any){
  
  let value = event.target.value;
  // console.log(value);
  // if(value== 'all'){
  //   this.getProducts()
  // }
  // else{
  //   this.getProductsCategery(value)
  // }
  (value == 'all') ? this.getProducts() : this.getProductsCategery(value) //بتقوم بعمل if اسمه short condition
  
 }
 getProductsCategery(keyword:string){
  this.loading = true
  this._Service.getProductsByCategery(keyword).subscribe({
    next:(data:any)=>{
      this.products =data
      this.loading = false
    }
  })
 }
 addToCart(event:any){
  // console.log(event);
  if("cart" in localStorage){
    this.cartProduct =JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProduct.find(item =>item.item.id == event.item.id) 
    if(exist){
      alert("product is already in your cart")
    }
    else{
      this.cartProduct.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    }
   
  }
  else{
    this.cartProduct.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cartProduct))
  }
 }

}
