import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Cart } from './cart.model';

@Injectable()
export class OrderRepository {
  private orders: Order[] = [];
  private temp: Order[] = [];
  private tempOrder: Order;
  private tempCart: Cart;
  private loaded = false;

  constructor(private dataSource: RestDataSource) { }

  loadOrders(): void {
    this.loaded = true;
    this.dataSource.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  // Get orders filter by specific buyer
  getOneOrder(id: number): Order[]
  {
    if (!this.loaded)
    {
      this.loadOrders();
    }
    return this.orders.filter(p => p._id === id);
  }

  saveOrder(order: Order): boolean
  {
    this.dataSource.saveOrder(order).subscribe(res => {
        this.tempOrder = res.order as Order;
        this.orders.push(this.tempOrder);
    });
    return true;
  }

  updateOrderShipping(
    store: string,
    originalShipping: boolean,
    changedShipping: boolean,
    id: number
  ): void
  {
    this.dataSource.updateOrderShipping(id, store, originalShipping, changedShipping)
      .subscribe(res => {
        if (res.success) {
          this.orders.forEach(function (order) {
            if (order._id === id) {
              for (let line of order.cart.lines) {
                if (line.book.store === store && line.shipping === originalShipping) {
                  line.shipping = changedShipping;
                }
              }
            }
         });
        }
      });
  }

  deleteOrder(id: number): Observable<any>
  {
    return this.dataSource.deleteOrder(id);
  }

}
