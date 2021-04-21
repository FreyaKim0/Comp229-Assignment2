import { Book } from './book.model';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order
{
  // tslint:disable-next-line: variable-name

  // ====Buyer====
  public buyer: string;
  public created: Date;
  // ====Address====
  public _id: number; // <----- change from number
  public name: string;  // <---buyer's account user name
  public address: string;
  public city: string;
  public province: string;
  public postalCode: string;
  public country: string;
  // ====Ship status====
  public shipped: boolean;
  // ====Product====
  public orders: Book[];
  // ====sales====
  public store: string;
  // ====Payment amount====
  public totalAmount: number;

  constructor(public cart: Cart){}
  clear(): void
  {
    // ====Address====
    this._id = null;
    this.name = null;
    this.address = null;
    this.city = null;
    this.province = null;
    this.postalCode = null;
    this.country = null;
    this.shipped = null;
    this.cart.clear();
     // ====Ship status====
    this.shipped = false;
    // ====Product====
    this.orders = [];
    // ====sales====
    this.store = null;
    // ====Payment amount====
    this.totalAmount = 0;
  }
}
