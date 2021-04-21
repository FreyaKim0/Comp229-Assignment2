import { OrderRepository } from './../../model/order.repository';
import { Order } from '../../model/order.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderSent = false;
  submitted = false;

  constructor(public repository: OrderRepository,
              public order: Order,
              public cart: Cart)
  {
     // Assign buyer's name
     const userInfo = JSON.parse(localStorage.getItem('user'));
     const thisUserDisplayName = userInfo.displayName;
     this.order.buyer = thisUserDisplayName;
   }
  ngOnInit(): void {}
  submitOrder(form: NgForm): void
  {
     this.submitted = true;
     if (form.valid)
     {
       this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
