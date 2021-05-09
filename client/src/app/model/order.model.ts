import { Book } from './book.model';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order
{
  public _id: number;
  public buyer: string;
  public name: string;  // <---buyer's account user name
  public address: string;
  public city: string;
  public province: string;
  public postalCode: string;
  public country: string;
  public created: Date;

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
    this.cart.clear();
  }
}
