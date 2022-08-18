import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  constructor(private service:CartService) { }
  cartProduct:any[]=[]
total:any=0
success:boolean=false
  ngOnInit(): void {
    this.getCartProducts()
  }
getCartProducts(){
  if("cart" in localStorage){
    this.cartProduct =JSON.parse(localStorage.getItem("cart")!)
  }
  this.getCartTotal()
  // console.log(this.cartProduct);
  
}

addAmmount(index:number){
  this.cartProduct[index].quantity++
  this.getCartTotal()
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
}
minsAmmount(index:number){
  this.cartProduct[index].quantity--
  this.getCartTotal()
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
}
detectChange(){
  this.getCartTotal()
  
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
}
deleteProduct(index:number){
  this.cartProduct.splice(index , 1)
  this.getCartTotal()
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))
}
clearCart(){
  this.cartProduct =[]
  this.getCartTotal() 
  localStorage.setItem("cart", JSON.stringify(this.cartProduct))

}
getCartTotal(){
  this.total = 0
  for(let x in this.cartProduct){
    this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity;
  }
  }
  addCart(){
let products = this.cartProduct.map(item=>{
  return {productId:item.item.id, Quantity:item.quantity}
})
    let model = {
      userid:5,
      date:new Date(),
      products: products
    }
    // console.log(model);
    this.service.creatNewCart(model).subscribe({
      next:(data:any)=>{
        this.success=true
      }
    })
    
  }

}
