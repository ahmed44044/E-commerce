import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
@Input() data:any={}
@Output() item=new EventEmitter()
addButton:boolean=false
ammount:number=1
  constructor() { }

  ngOnInit(): void {
  }
add(){
this.item.emit({item:this.data,quantity:this.ammount})
}
}
