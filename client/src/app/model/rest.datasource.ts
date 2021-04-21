/* Online Middleware To Backend */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Order } from './order.model';
import { JwtHelperService} from '@auth0/angular-jwt';
import { User } from './user.model';
import { Form } from '@angular/forms';



@Injectable()
export class RestDataSource
{
  // Who is logging as user in this browser...
  user: User;  // username , displayname and email
  authToken: string;
  baseUrl: string;

  private httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient,
              private jwtService: JwtHelperService)
  {
    this.user = new User();
    this.baseUrl = `http://localhost:3500/`; // + /api/ for product phase
    //this.baseUrl = `https://xu-tung-jin-assignment2.herokuapp.com/api/`;
  }





  // get, add, update user (registration)
  getUser(): Observable<User[]>
  {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  addUser(user: User): Observable<User>
  {
    this.loadToken();
    return this.http.post<User>(this.baseUrl + 'register', user, this.httpOptions);
  }

  updateUser(user: User): Observable<User>
  {
    this.loadToken();
    return this.http.post<User>(this.baseUrl + 'register', this.httpOptions);
  }








  // loggin (storeUserData + authenticate) , loggout
  storeUserData(token: any, user: User): void
  {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  authenticate(user: User): Observable<any>
  {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  logout(): Observable<any>
  {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

  loggedIn(): boolean
  {
    return !this.jwtService.isTokenExpired(this.authToken);
  }









  // get, add, update, delete books


  getBooks(): Observable<Book[]>
  {
    return this.http.get<Book[]>(this.baseUrl + 'book-list');
  }

  addBook(bookData: FormData): Observable<any>
  {
    this.loadToken();
    return this.http.post<{book: Book}>(this.baseUrl + 'book-list/add', bookData, this.httpOptions);
  }

  updateBook(bookData: FormData,_id: string): Observable<Book>
  {
    this.loadToken();
    console.log('updatebook id: ' + _id);
    return this.http.post<{book: Book}>(`${this.baseUrl}book-list/edit/${_id}`,bookData, this.httpOptions);
  }

  deleteBook(id: string): Observable<Book>
  {
    console.log('delete Book start running..');
    this.loadToken();
    return this.http.get<Book>(`${this.baseUrl}book-list/delete/${id}`, this.httpOptions);
  }





  // save, get, delete, update orders
  saveOrder(order: Order): Observable<Order>
  {
    // LINE有被變成json沒錯
    console.log("rest->saveOrder: "+ JSON.stringify(order));
    return this.http.post<Order>(this.baseUrl + 'orders/add', order);
  }

  getOrders(): Observable<Order[]>
  {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }

  deleteOrder(id: number): Observable<Order>
  {
    this.loadToken();
    return this.http.get<Order>(`${this.baseUrl}orders/delete/${id}`, this.httpOptions);
  }

  updateOrder(order: Order): Observable<Order>
  {
    this.loadToken();
    return this.http.post<Order>(`${this.baseUrl}orders/edit/${order._id}`, order, this.httpOptions);
  }





  // load Token
  // the token be sent back to server side
  // each time when requiring some personal data from backend
  private loadToken(): void
  {
    const token = localStorage.getItem('id_token');
    this.authToken = 'bearer '+token;
    this.httpOptions.headers = new HttpHeaders().set('Authorization', this.authToken);
  }


}

