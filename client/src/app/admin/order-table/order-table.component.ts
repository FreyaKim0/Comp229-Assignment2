import { OrderRepository } from './../../model/order.repository';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit
{
  includeShipped = false;
  constructor(private repository: OrderRepository,
              private router: Router){}

  ngOnInit(): void {
  }

  getOrders(): Order[]
  {
    return this.repository.getOrders()
    .filter(o => this.includeShipped || o.shipped);
  }

  markShipped(order: Order): void
  {
    order.shipped = (order.shipped) ? false : true;
    this.repository.updateOrder(order);
    window.location.assign('/admin/main/orders');
  }

  delete(id: number): void
  {
    if (!confirm('Are you sure?'))
    {
      console.log(id);
      this.repository.deleteOrder(id);
    }
    else
    {
      window.location.assign('/admin/main/orders');
    }
  }
}
