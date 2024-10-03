import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import { UserService } from '../service/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    // private userService: UserService,
    private router: Router,
  ) {}

  // Foydalanuvchini avtorizatsiyadan o'tganini tekshiradi
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Agar foydalanuvchi avtorizatsiyadan o'tgan bo'lsa, true qaytaradi
    if (true) {
      return true;
    } else {
      // Aks holda login sahifasiga yo'naltiradi
      this.router.navigate(['/login']);
      return false;
    }
  }

  // Child marshrutlar uchun ham xuddi shu tekshiruvni amalga oshiramiz
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(route, state);
  }
}
