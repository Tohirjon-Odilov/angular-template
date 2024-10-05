import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentication/auth.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoggerService } from '../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService, private logger: LoggerService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const expectedRoles = route.data['roles'] as Array<string>;

    // Foydalanuvchi ro'llarini kuzatish
    return this.authService.getUserRoles().pipe(
      map((userRoles: string[]) => {
        // Foydalanuvchining rollarini tekshirish
        const hasRole = expectedRoles?.some((role) => userRoles.includes(role));

        this.logger.info(`User has role: ${expectedRoles}`);

        // Agar user roli topilmasa, xato va login sahifasiga yo'naltirish
        if (userRoles.includes('null')) {
          this.toastr.warning('Foydalanuvchi roli topilmadi!', 'Xatolik');
          this.router.navigate(['/auth/login']);
          return false;
        }

        // Agar userning ruxsati bo'lmasa, Access Denied sahifasiga yo'naltirish
        if (!hasRole) {
          this.router.navigate(['/error-pages/access-denied']);
          return false;
        }

        return true;
      }),
      tap((canActivate: boolean) => {
        if (!canActivate) {
          this.toastr.error('Sahifaga kirish uchun ruxsat yo\'q!', 'Xatolik');
        }
      })
    );
  }
}
