
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { ConditionalExpr } from '@angular/compiler';

@Injectable()
export class OrderRepository
{
  private orders: Order[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) { }

  // This shit is not working
  loadOrders(): void
  {
    this.loaded = true;
    this.dataSource.getOrders().subscribe(orders => this.orders = orders);
  }

  // Get all orders for 'Purchase History' page
  getOrders(): Order[]
  {
    if (!this.loaded)
    {
      this.loadOrders();
    }
    //console.log('getOrders: '+this.orders);
    return this.orders;
  }


  // Get orders of specific buyer
  getOneOrder(id: number): Order[]
  {
    if (!this.loaded)
    {
      this.loadOrders();
    }

    return this.orders.filter(p => p._id === id);
  }

  saveOrder(order: Order): Observable<Order>
  {
    return this.dataSource.saveOrder(order);
  }

  updateOrder(updatedOrder: Order): void
  {
    this.dataSource.updateOrder(updatedOrder).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => o._id === order._id), 1, order);
    });
  }

  deleteOrder(id: number): void
  {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id === o._id), 1);
    });
  }

}
