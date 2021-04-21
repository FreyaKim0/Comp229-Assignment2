import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderRepository } from './../../model/order.repository';
import { Component, Input, NgModuleRef, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { FormBuilder, Validators } from '@angular/forms';



// BasePage
@Component({
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})

export class OrderTableComponent implements OnInit
{

  constructor(private repository: OrderRepository,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              public fb: FormBuilder)
  {
    // This user name
    const userInfo = JSON.parse(localStorage.getItem('user'));
    this.thisUserDisplayName = userInfo.displayName;
  }
  selector: 'order-table-component';
  title: string;
  includeShipped = false;
  thisUserDisplayName: string;

  // drop down
  // City Names
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];

  // dropdown
  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]]
  });
  // Choose city using select dropdown
  // tslint:disable-next-line: typedef
  changeCity(e, index: number) {
    console.log(e.value);

  }


  ngOnInit(): void {
    this.title = this.route.snapshot.data.title;
  }

  // Open Modal page
  // tslint:disable-next-line: typedef
  open(id: number, index: number)
   {
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


  getOrders(): Order[]
  {
    let temp: Order[] = [];

    if (this.title === 'Purchase History') {
      // get all orders filter by this user name
      temp = this.repository.getOrders()
       .filter(p => p.buyer === this.thisUserDisplayName);

      // return upshipped one
      return temp
        .filter(o => this.includeShipped? o.shipped : !o.shipped);
    }

    // Manage Order page
    else {

      // get all orders filter by this user name
      temp = this.repository.getOrders();
      const temp2: Order[] = this.getStoreOrders(temp, this.thisUserDisplayName);
      return temp2
        .filter(o => !this.includeShipped || o[0].shipped);
    }
  }

  getStoreOrders(temp: Order[],userDisplayName: string): Order[]
  {

    // Create an Order subject
    const returnArray: Order[] = [];


    // Write matching lines into tempOrder
    temp.forEach( function (order) {

      let tempOrder = new Order(new Cart());

      // tslint:disable-next-line: prefer-for-of
      for (let counter = 0; counter < order.cart.lines.length; counter++) {

        let x = order.cart.lines[counter];


        if (x.book.store === userDisplayName) {
            tempOrder.cart.addLine(x.book, x.quantity);
          }
      }

      // If there(第一個order中) is mathing line , push this line into return array
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

  // delete order
  delete(id: number): void
  {
    if (!confirm('Are you sure?'))
    {
      console.log(id);
      this.repository.
        deleteOrder(id);
    }
    else
    {
      window.location.assign('/admin/main/orders');
    }
  }
}


// ModalPage
@Component({
  // tslint:disable-next-line: component-selector
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
                    }}&nbsp;x&nbsp;{{ line.quantity }}<br>Store:&nbsp;{{line.book.store}}</span>
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
                <td class="text-left w-50 p-0">Shipping</td>
                <td class="text-right w-50 p-0">$15.00</td>
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
                  {{ order.cart.cartPrice + 15 | currency: "USD":"symbol":"2.2-2" }}
                </td>
              </tr>
            </table>

            <!--continue shopping-->
            <div *ngIf="title === 'Purchase History'">
              <button  class="buttonS" routerLink="">Contact Store</button
              >&nbsp; <br />
            </div>
            <div *ngIf="title === 'Manage Order'">
              <button class="buttonS" routerLink="">Contact Buyer</button
              >&nbsp; <br />
            </div>

            <!--checkout-->
            <button class="buttonS checkout" onclick="closeModal()">
              Close
            </button>
          </div>
        </div>
    `,
  styleUrls: ['../order-each/order-each.component.css']
})
// tslint:disable-next-line: class-name
export class modalComponent implements OnInit {

  @Input() orderId;
  @Input() order;
  @Input() title;
  @Input() manageOrder: Order[] = [];
  @Input() index: number;




  constructor(private repository: OrderRepository,
              public activeModal: NgbActiveModal) {
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    if (this.title === 'Purchase History') {
      this.order = this.repository.getOneOrder(this.orderId)[0];
    }
    // title = 'Manage Order'
    else {
      console.log('Modal: ' + this.manageOrder);
     // console.log('Modal: ' + this.manageOrder[this.index].cart.lines[this.index].book.name);
      this.order = this.manageOrder[this.index];

    }
  }
  closeModal(): void {

  }
}

