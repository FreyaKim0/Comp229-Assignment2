import { AuthService } from '../../model/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  public user: User;
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  // tslint:disable-next-line: typedef
  authenticate(form: NgForm): void
  {

    if (form.valid)
    {

      // ----------------以下有問題...直接被跳過----------------
      // perform authentication
      // 1) Restdatasource.authenticate(user);
      //                   http://localhost/3500/login  我輸入的資料  HttpHeaders
      // 2) this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
      // 3) 後端routs index.js反應了router.post('/login',indexController.processLoginPage);
      // 4) .....controller..........反彈卡在後端GG
      this.auth.authenticate(this.user).subscribe(data => {
        if (data.success)
          {
            this.auth.storeUserData(data.token, data.user);
            this.router.navigateByUrl('admin/main');
          }
       });
    }
    else
    {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
