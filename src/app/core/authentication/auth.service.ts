import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { API_URLS, ROLES } from '../../config/constants'; // constants.ts dan import qilish
import { LoggerService } from '../services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private rolesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]); // Ro‘llarni kuzatish uchun BehaviorSubject
  // private currentUserSubject: BehaviorSubject<any>;
  // public currentUser: Observable<any>;
  constructor(
    private http: HttpClient,
    private router: Router,
    private logger: LoggerService
  ) {
    // BehaviorSubject'dan foydalanuvchini olish
    // this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userData') || '{}'));
    // this.currentUser = this.currentUserSubject.asObservable();

    // Ro‘llarni localStorage'dan yuklash, agar mavjud bo'lsa
    const storedRoles = this.getStoredUserRoles();
    if (storedRoles) {
      this.rolesSubject.next(storedRoles); // Ro‘llarni yangilash
    }
  }

  // Foydalanuvchini login qilish
  login(data: any): Observable<any> {
    return this.http.post<any>(API_URLS.LOGIN_URL, data).pipe(  // constants.ts dan URL olindi
      tap(user => {
        if (user && user.token) {
          // Foydalanuvchini localStorage va BehaviorSubject'da saqlash
          localStorage.setItem('userData', JSON.stringify(user)); // Ma'lumotlarni saqlash
          const [roles, token] = this.getRolesFromUser(user.is_designer ? ROLES.ADMIN : ROLES.USER, user.token); // Ro‘llarni olish
          this.rolesSubject.next([roles]); // Ro‘llarni yangilash
        }
      }),
      catchError(this.handleError) // Xatolarni boshqarish
    );
  }

  // Foydalanuvchini logout qilish
  logout(): void {
    // localStorage'dan foydalanuvchini o'chirish va BehaviorSubject'da ro‘llarni yangilash
    localStorage.removeItem('userData'); // Ma'lumotlarni o'chirish
    this.rolesSubject.next([]); // Ro‘llarni bo'shatish
    this.router.navigate(['/auth/login']); // Login sahifasiga yo‘naltirish
  }

    // Avtorizatsiya tekshiruvini bu yerda amalga oshiramiz
    public isAuthenticated(): any {
      // const user = this.currentUserSubject.value;
      // this.logger.info(user);
      return this.getStoredUserRoles();
    }

  // Foydalanuvchining rollarini kuzatish (Observable orqali)
  getUserRoles(): Observable<string[]> {
    return this.rolesSubject.asObservable(); // Observable orqali ro‘llarni kuzatish
  }

  // Ro‘llarni o‘rnatish (kuzatish uchun)
  setUserRoles(roles: string[]): void {
    this.rolesSubject.next(roles); // Ro‘llarni BehaviorSubject orqali yangilash
  }

  // Foydalanuvchi rollarini localStorage'dan olish
  private getStoredUserRoles(): string[] | null {
    try {
      const userData = JSON.parse(localStorage.getItem('userData') as string); // LocalStorage'dan ma'lumot olish
      return this.getRolesFromUser(userData.is_designer ? ROLES.ADMIN : ROLES.USER, userData.token); // Ro‘llarni user ma'lumotidan olish
    } catch (error) {
      return null; // Agar xato bo'lsa, null qaytarish
    }
  }

  // Foydalanuvchi ob'ektidan ro‘llarni olish
  private getRolesFromUser(role: any, token: any): string[] {
    var data: any = { 
      roles: role, 
      token: token
    };
    return data; // constants.ts dan rollar
  }

  // Xatolarni boshqarish uchun umumiy funksiya
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Xato yuz berdi';
    if (error.error instanceof ErrorEvent) {
      // Client-side xatolar
      errorMessage = `Client xatosi: ${error.error.message}`;
    } else {
      // Server-side xatolar
      errorMessage = `Server xatosi: ${error.status}\nXabar: ${error.message}`;
    }
    return throwError(errorMessage); // Observable orqali xato qaytarish
  }
}
