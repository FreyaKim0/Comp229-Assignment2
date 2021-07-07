import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';

@Injectable()
export class AuthGuard{

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router: Router,
              private auth: AuthService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if (this.auth.authenticated)
    {
      return true;
    }
    else{
      this.router.navigate(['/admin/auth']);
      return false;
    }
  }
}
