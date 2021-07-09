/* Online Middleware To Backend */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Order } from './order.model';
import { JwtHelperService} from '@auth0/angular-jwt';
import { User } from './user.model';

@Injectable()
export class RestDataSource
{
  // Who is logging as user in this browser...
  user: User;  // username , displayname and email
  authToken: string;
  baseUrl: string;
  temp: Order[] = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient,
              private jwtService: JwtHelperService) {
    this.user = new User();
    //this.baseUrl = `http://localhost:3500/`; // + /api/ for product phase
    this.baseUrl = `https://xu-tung-jin.herokuapp.com/api/`;
  }

  // ====== get, add, update user (registration) ======
  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  addUser(user: User): Observable<any>{
    this.loadToken();
    return this.http.post<User>(this.baseUrl + 'register', user, this.httpOptions);
  }

  updateUser(user: User): Observable<User>{
    this.loadToken();
    return this.http.post<User>(this.baseUrl + 'register', this.httpOptions);
  }

  // ====== login (storeUserData + authenticate) , logout ======
  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  logout(): Observable<any> {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

  loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  // ====== CRUD books ======
  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl + 'book-list');
  }

  addBook(bookData: FormData): Observable<any>{
    this.loadToken();
    return this.http.post<{book: Book}>(this.baseUrl + 'book-list/add', bookData, this.httpOptions);
  }

  updateBook(bookData: FormData, _id: string): Observable<Book>{
    this.loadToken();
    return this.http.post<{book: Book}>(`${this.baseUrl}book-list/edit/${_id}`,bookData, this.httpOptions);
  }

  updateBookWithSameImage(bookData: FormData, _id: string): Observable<any> {
     this.loadToken();
    return this.http.post<{book: Book}>(`${this.baseUrl}book-list/editWithSameImage/${_id}`,bookData,this.httpOptions);
  }

  deleteBook(id: string): Observable<Book>{
    this.loadToken();
    return this.http.get<Book>(`${this.baseUrl}book-list/delete/${id}`, this.httpOptions);
  }

  // ====== CRUD orders ======
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }

  saveOrder(order: Order): Observable<any> {
    return this.http.post<Order>(this.baseUrl + 'orders/add', order);
  }

  updateOrderShipping(id: number, store: string, originalShipping: boolean, changedShipped: boolean): Observable<any> {
    this.loadToken();
    console.log('id ' + id)
    console.log('store ' + store)
    console.log('before ' + originalShipping)
    console.log('after '+changedShipped)
     return this.http.post<Order>(`${this.baseUrl}orders/edit/${id}/${store}/${originalShipping}/${changedShipped}`, this.httpOptions);
  }

  deleteOrder(id: number): Observable<any> {
    this.loadToken();
    return this.http.get<Order>(`${this.baseUrl}orders/delete/${id}`, this.httpOptions);
  }

  // load Token
  // the token be sent back to server side
  // each time when requiring some personal data from backend
  private loadToken(): void {
    const token = localStorage.getItem('id_token');
    this.authToken = 'bearer ' + token;
    this.httpOptions.headers = new HttpHeaders().set('Authorization', this.authToken);
  }
}
