/* Online Middleware To Backend */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders , HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Order } from './order.model';
import { JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { Cart } from './cart.model';
import { Type } from '@angular/compiler/src/core';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

const PROTOCOL = 'https';
const PORT = 3500;

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
    'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient,
              private jwtService: JwtHelperService)
  {
    this.user = new User();
    // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    this.baseUrl = `https://xu-tung-jin-assignment2.herokuapp.com/api/`;
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
    localStorage.setItem('id_token', 'bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

    console.log('rest.datasource:');
    console.log('authToken:' + this.authToken);
    console.log('user displayname:' + this.user.displayName);
    console.log('user email:' + this.user.email);
    console.log('user username:' + this.user.username);
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

  addBook(book: Book): Observable<any>
  {
    this.loadToken();
    return this.http.post<Book>(this.baseUrl + 'book-list/add', book, this.httpOptions);
  }


  updateBook(book: Book): Observable<Book>
  {
    this.loadToken();
    console.log('rest.datasources,update book id:' + book._id);
    console.log('rest.datasources,update book name:' + book.name);
    console.log('rest.datasources,update book author:' + book.author);
    console.log('rest.datasources,update book description:' + book.description);
    console.log('rest.datasources,update book price:' + book.price);
    console.log('rest.datasources,update book published:' + book.published);
    return this.http.post<Book>(`${this.baseUrl}book-list/edit/${book._id}`, book, this.httpOptions);
  }

  deleteBook(id: number): Observable<Book>
  {
    this.loadToken();
    return this.http.get<Book>(`${this.baseUrl}book-list/delete/${id}`, this.httpOptions);
  }





  // save, get, delete, update orders
  saveOrder(order: Order): Observable<Order>
  {
    console.log(JSON.stringify(order));
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
    this.authToken = token;

    // this IS wrong
    this.httpOptions.headers = new HttpHeaders().set('Authorization', this.authToken);

  }


}

