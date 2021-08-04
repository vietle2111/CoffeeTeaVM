import { Component, OnInit } from '@angular/core';
import { ContainerService } from '../services/container.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
  totalPrice:number =0.00;
  totalQuantity:number =0;

  constructor(private cs:ContainerService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }
  updateCartStatus(){
    this.cs.totalPrice.subscribe(
        (      data: number) => this.totalPrice = data
    );
    this.cs.totalQuantity.subscribe(
        (      data: number) => this.totalQuantity = data
    );
  }
}
