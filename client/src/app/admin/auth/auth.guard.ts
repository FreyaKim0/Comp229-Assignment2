import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';


@Injectable()
export class AuthGuard
{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router: Router,
              private auth: AuthService){ }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if (this.auth.authenticated)
    {
      console.log('auth.guard: authenticated');
      return true;
    }
    else{
      console.log('auth.guard: cannot authenticate, go back to login page');
      this.router.navigate(['/admin/auth']);
      return false;
    }
  }
}
