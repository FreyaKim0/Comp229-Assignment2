
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';
import { User } from './user.model';

@Injectable()
export class AuthService
{
  user: User;

  // Initial constructor
  constructor(private datasource: RestDataSource)
  {
   this.user = new User();
  }

  // login
  authenticate(user: User): Observable<any>
  {
     return this.datasource.authenticate(user);
  }

  // local storage
  storeUserData(token: any, user: User, expireIn: any): void
  {
    this.datasource.storeUserData(token, user, expireIn);
  }

  // is logged in
  get authenticated(): boolean
  {
   return this.datasource.loggedIn();
  }

  // is logged out
  logout(): Observable<any>
  {
    return this.datasource.logout();
  }

  // rigister new user
  // tslint:disable-next-line: typedef
  createUser()
  {
    console.log('IN auth.service.ts creat() ...');
    return this.datasource.addUser(this.user);
  }
}
