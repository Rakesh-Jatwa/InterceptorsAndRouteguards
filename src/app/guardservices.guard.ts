import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service'

@Injectable({
  providedIn: 'root'
})
export class GuardservicesGuard implements CanActivate {
  constructor(private srv: UserServiceService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.srv.isPerson()) {
      return true;
    }
    else {
      alert("that user  dont have the persmission for go to person")
      this.router.navigate(['/company']);
    }
  }

}
