import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
id:any
data:any={}
loading:boolean=false
  constructor(private router:ActivatedRoute, private service:ProductService) { 
    this.id = this.router.snapshot.paramMap.get("id")
    // console.log(this.id);
    
  }

  ngOnInit(): void {
    this.getProduct()
  }
getProduct(){
  this.loading=true
this.service.getProductsById(this.id).subscribe({
  next:(res:any)=>{
    this.loading=false
    this.data =res
    console.log(this.data);
    
    
    
  },
  error:(err:any)=>{
    this.loading=false
    alert(err)
  }
})
}
}
