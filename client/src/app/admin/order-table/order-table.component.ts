import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderRepository } from './../../model/order.repository';
import { Order } from 'src/app/model/order.model';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Component, Input, OnInit} from '@angular/core';

// ModalPage(Child)
@Component({
  selector: 'modalpage',

  // ======TEMPLATE HTML CODE STARTS======
  template: `
        <div class="wrap">

          <!--Details table-->
          <div id="left">
            <p class="line_title">Order Details</p>
            <hr />

            <!--Generate items-->
            <table *ngFor="let line of order.cart.lines">
              <tr>
                <th style="width: 120px">
                  <!--Item picture-->
                   <div class="itemPicture">
                      <img
                        [src]="line.book.imagePath"
                        [alt]="line.book.name"
                        style="max-width: 100px; max-height: 100px"
                      />
                    </div>
                </th>
                <th style="text-align: left; width: 250px; margin-bottom: 10px">
                  <!--Book name-->
                 {{line.book.name}} <br /><br />
                  <!--Single price-->
                  <span style="color: grey; width: 250px; font-size: 14px">
                    {{
                      line.book.price | currency: "USD":"symbol":"2.2-2"
                    }}&nbsp;x&nbsp;{{ line.quantity }}
                    <br>This order is
                    <span *ngIf="!line.shipping" style="color:rgb(230, 171, 9);"><b>in process</b></span>
                    <span *ngIf="line.shipping" style="color:maroon;"><b>has been sent</b></span>
                    by&nbsp;<u>{{line.book.store}}</u></span>
                  <!--quantity-->

                </th>
                <th>
                  <!--amount*price-->
                  <span style="color: red">{{
                    line.book.price*line.quantity | currency: "USD":"symbol":"2.2-2"
                  }}</span>
                </th>
              </tr>
            </table>

            <hr />
          </div>


          <!--Center Address-->
          <div id="center">
             <p class="line_title">Shipping Info</p>
            <hr />
            <span style="font-size:14px;">
            <u>{{order.name}}</u><br>
            {{order.address}},
            {{order.city}},
            {{order.province}},

            {{order.country}} &nbsp;
            ({{order.postalCode}})
            </span><br><hr>
          </div>

          <!--Summary-->
          <div id="right">
            <p class="line_title">Summary</p>
            <hr />
            <table class="summary">
              <tr>
                <td class="text-left w-50 p-0">Subtotal</td>
                <td class="text-right w-50 p-0">
                  {{ order.cart.cartPrice | currency: "USD":"symbol":"2.2-2" }}
                </td>
              </tr>
              <tr>
                <td class="text-left w-50 p-0">Tax</td>
                <td class="text-right w-50 p-0">{{ order.cart.cartPrice*0.15 | currency: "USD":"symbol":"2.2-2" }}</td>
              </tr>
              <tr>
                <td class="text-left w-50 p-0">
                  <hr />
                </td>
                <td class="text-right w-50 p-0">
                  <hr />
                </td>
              </tr>
              <tr>
                <td class="text-left w-50 p-0">Total</td>
                <td class="text-right w-50 p-0">
                  <span style="color:maroon"><b>{{ order.cart.cartPrice*1.15 | currency: "USD":"symbol":"2.2-2" }}</b></span>
                </td>
              </tr>
            </table>
          </div>
        </div>
    `,
  styleUrls: ['../order-each/order-each.component.css']
})

export class modalComponent implements OnInit {

  @Input() orderId;
  @Input() order;
  @Input() title;
  @Input() manageOrder: Order[] = [];
  @Input() index: number;

  constructor(private repository: OrderRepository,
              public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if (this.title === 'Purchase History') {
      this.order = this.repository.getOneOrder(this.orderId)[0];
    }
    // title = 'Manage Order'
    else {
      this.order = this.manageOrder[this.index];
    }
  }

}

// BasePage(Parent)
@Component({
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})

export class OrderTableComponent implements OnInit
{
  selector: 'order-table-component';

  public checkedValue = true;
  title: string;
  thisUserDisplayName: string;
  closeThisModal = false;
  shipped: string;

  constructor(private repository: OrderRepository,
              private route: ActivatedRoute,
              private modalService: NgbModal){ }

  ngOnInit(): void
  {
    // Set this user's name
    const userInfo = JSON.parse(localStorage.getItem('user'));
    this.thisUserDisplayName = userInfo.displayName;

    //  Set this title's name
    this.title = this.route.snapshot.data.title;
  }

  // Open Modal page
  open(id: number, index: number): void
  {
     console.log('id ' + id + ' index ' + index);
     // Open modal window
     const ModalRef = this.modalService.open(modalComponent,
       {
         windowClass: 'this_modal',
         scrollable: true,
       });

     // Assign value
     ModalRef.componentInstance.orderId = id;
     ModalRef.componentInstance.title = this.title;

     // Manage Order's value
     let manageOrder: Order[] = [];
     manageOrder = this.getStoreOrders(this.repository.getOrders(), this.thisUserDisplayName);
     ModalRef.componentInstance.manageOrder = manageOrder;
     ModalRef.componentInstance.index = index;
  }

  // Get order lists
  getOrdersTs(): Order[]
  {
    // get orders filter by user name
    let userOrders: Order[] = [];
    let storeOrders: Order[] = [];

    userOrders = this.repository.getOrders()
      .filter(p => p.buyer === this.thisUserDisplayName);

    if (this.title === 'Purchase History') {

      // Archieved option
      return userOrders; // .filter(o => this.includeShipped? o.shipped : !o.shipped);
    }

    if (this.title === 'Manage Order'){

      // get orders filter by store name
      storeOrders = this.getStoreOrders(userOrders, this.thisUserDisplayName);

      // Archieved option
      return storeOrders; // .filter(o => !this.includeShipped || o[0].Cart.lines);
    }
  }

  getStoreOrders(temp: Order[], userDisplayName: string): Order[]
  {
    // Create an Order subject
    const returnArray: Order[] = [];

    // Write matching lines into tempOrder
    temp.forEach( function(order): void {

      const tempOrder = new Order(new Cart());

      // tslint:disable-next-line: prefer-for-of
      for (let counter = 0; counter < order.cart.lines.length; counter++) {

        const x = order.cart.lines[counter];

        if (x.book.store === userDisplayName) {
            tempOrder.cart.addLine(x.book, x.quantity, x.shipping);
        }
      }

      if (tempOrder.cart.lines.length !== 0 ) {
          tempOrder._id = order._id;
          tempOrder.buyer = order.buyer;
          tempOrder.name = order.name;
          tempOrder.address = order.address;
          tempOrder.city = order.city;
          tempOrder.province = order.province;
          tempOrder.postalCode = order.postalCode;
          tempOrder.country = order.country;
          tempOrder.created = order.created;

          returnArray.push(tempOrder);
      }
    });

    return returnArray;
  }

  // Change shipping status
  changeShipStatus(id: number, index: number, originalShipping: boolean): void
  {
    const changedShipping = !originalShipping;

    // Set value for restdatasource
    this.repository.updateOrderShipping(
      this.thisUserDisplayName,
      originalShipping,
      changedShipping,
      id);
   }

  // Check shipping status
  checkShipping(id: number, index: number): void {

  }

  shippingCalculate(id: number, index: number): void {
  }

  // delete order
  delete(id: number): void
  {
    if (confirm('Are you sure to delete this order?'))
    {
      this.repository.deleteOrder(id).subscribe(res => {
        if (res.success) { window.location.reload(); }
    });
    }
  }
}


