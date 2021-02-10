
import { AuthService } from '../../model/auth.service';
import { Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit, OnDestroy {
  public user: User;
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router,
              private auth: AuthService,
              // tslint:disable-next-line: variable-name
              @Inject(DOCUMENT) private _document ) { }

  ngOnInit(): void {
    this.user = new User();
    this._document.body.classList.remove('bodybg-color');
    this._document.body.classList.add('homebg-color');
  }
  ngOnDestroy(): void
  {
    this._document.body.classList.remove('homebd-color');
  }
  goRegister(): void
  {
    this.router.navigateByUrl('/admin/register');
  }

  // tslint:disable-next-line: typedef
  authenticate(form: NgForm): void
  {
    if (form.valid)
    {
      this.auth.authenticate(this.user).subscribe(data => {
        if (data.success)
          {
            this.auth.storeUserData(data.token, data.user);
            this.router.navigateByUrl('home');
          }
       });
    }
    else
    {
      this.errorMessage = 'Please fill in both rows .';
    }
  }
}
