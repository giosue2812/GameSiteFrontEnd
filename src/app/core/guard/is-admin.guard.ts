import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionService} from '../services/session.service';
import {ToastService} from '../services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor(private sessionService:SessionService, private router:Router,private toastService:ToastService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.sessionService.isAdmin){
      this.router.navigateByUrl('');
      this.toastService.showErrorAdminNotAutorize();
    }
    else
    {
      return true
    }
  }

}
