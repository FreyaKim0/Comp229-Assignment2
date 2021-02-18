/* Online Middleware To Backend */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders , HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Order } from './order.model';
import { JwtHelperService} from '@auth0/angular-jwt';
import { User } from './user.model';
import * as moment from 'moment';

const PROTOCOL = 'https';
const PORT = 3500;

@Injectable()
export class RestDataSource implements HttpInterceptor
{
  // Who is logging as user in this browser...
  user: User;      // All user data from MongoDB except password
  authToken: string;   //   Brearer ...
  baseUrl: string;   //   my webname/api/

  // Interceptor for passing JWT to server
  intercept(req: HttpRequest<any>, next: HttpHandler): any
  {
    const idToken = localStorage.getItem('id_token');

    if (idToken)
    // Clone the previous request, and add on the token from local storage
    {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', idToken)
      });
      return next.handle(cloned);
    }
    else
    // Ask user to login cuz there is no token
    {
      return next.handle(req);
    }
  }

  /*private httpOptions =
  {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
  };*/

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
    return this.http.post<User>(this.baseUrl + 'register', user);
  }

  updateUser(user: User): Observable<User>
  {
    return this.http.post<User>(this.baseUrl + 'register', user);
  }



/*
const payload =
                {
                  id: user._id,
                  displayName: user.displayName,
                  username: user.username,
                  email: user.email
                }

const authToken = jwt.sign(
                            payload,
                            DB.Secret,
                            {expiresIn: 604800,}
                          );

  return res.json({ success: true,
                    msg: 'User Logged in Successfully!',
                    user: {
                              id: user._id,
                              displayName: user.displayName,
                              username: user.username,
                              email: user.email
                          },
                    token: authToken
                });
*/




  // loggin (storeUserData + authenticate) , loggout
  storeUserData(token: any, user: User, expiresIn: any): void
  {
    const expires = moment().add(expiresIn);

    localStorage.setItem('id_token', 'bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));

    this.authToken = 'bearer ' + token;
    this.user = user;

    console.log('rest.datasource:');
    console.log('authToken:' + this.authToken);
    console.log('user displayname:' + this.user.displayName);
    console.log('user email:' + this.user.email);
    console.log('user username:' + this.user.username);
  }

  // tslint:disable-next-line: typedef
  getExpiration(){
    const expiration = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  authenticate(user: User): Observable<any>
  {
    return this.http.post<any>(this.baseUrl + 'login', user);
  }

  logout(): Observable<any>
  {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout');
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
    return this.http.post<Book>(this.baseUrl + 'book-list/add', book);
  }


  updateBook(book: Book): Observable<Book>
  {
    console.log('rest.datasources,update book id:' + book._id);
    console.log('rest.datasources,update book name:' + book.name);
    console.log('rest.datasources,update book author:' + book.author);
    console.log('rest.datasources,update book description:' + book.description);
    console.log('rest.datasources,update book price:' + book.price);
    console.log('rest.datasources,update book published:' + book.published);
    return this.http.post<Book>(`${this.baseUrl}book-list/edit/${book._id}`, book);
  }

  deleteBook(id: number): Observable<Book>
  {
    return this.http.get<Book>(`${this.baseUrl}book-list/delete/${id}`);
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
    return this.http.get<Order>(`${this.baseUrl}orders/delete/${id}`);
  }

  updateOrder(order: Order): Observable<Order>
  {
    return this.http.post<Order>(`${this.baseUrl}orders/edit/${order._id}`, order);
  }
}

