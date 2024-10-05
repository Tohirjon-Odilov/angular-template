import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoggerService } from '../services/logger.service';
import { AuthService } from '../authentication/auth.service';
// import { LoggerService } from './logger.service'; // Logger xizmati import qilingan

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private logger: LoggerService, private authService: AuthService) {}

  // Foydalanuvchini avtorizatsiyadan o'tganini tekshiradi
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    
    // Misol uchun bu yerda foydalanuvchini avtorizatsiya holatini tekshirish kerak
    const [roles, token] = this.authService.isAuthenticated(); // Haqiqiy avtorizatsiya tekshiruvi bo'lishi kerak
    this.logger.info(`Is user authenticated: ${token}`);
    if (token) {
      this.logger.info('User is authenticated'); // Logger xizmati orqali kuzatish
      return true;
    } else {
      this.logger.warn('User is not authenticated, redirecting to login'); // Logger orqali xato loglash
      this.router.navigate(['/auth/login']);
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
