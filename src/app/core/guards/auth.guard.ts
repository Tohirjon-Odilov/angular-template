import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Foydalanuvchi autentifikatsiya qilinganligini tekshiradi
    if (this.authService.isAuthenticated()) {
      return true; // Agar autentifikatsiya qilingan bo'lsa, sahifaga kirishga ruxsat beradi
    } else {
      // Agar autentifikatsiya qilinmagan bo'lsa, foydalanuvchini login sahifasiga yo'naltiradi
      this.router.navigate(['/login']);
      return false;
    }
  }
}
