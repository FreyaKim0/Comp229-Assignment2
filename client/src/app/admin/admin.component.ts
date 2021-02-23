import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';
import { User } from '../model/user.model';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent
{
  public thisUserDisplayName;

  constructor(private auth: AuthService,
              private router: Router)
              {
                const userInfo = JSON.parse(localStorage.getItem('user'));
                this.thisUserDisplayName = userInfo('displayName');
                console.log(this.thisUserDisplayName);
              }
  logout(): void
  {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
