import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/auth'; // API'ning autentifikatsiya URL'ini kiriting
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // Login funksiyasi
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(user => {
        // Agar login muvaffaqiyatli bo'lsa, user ma'lumotlarini localStorage'da saqlash
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
      })
    );
  }

  // Logout funksiyasi
  logout(): void {
    // Foydalanuvchini localStorage'dan o'chirish va currentUserSubject'ni yangilash
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // Foydalanuvchi autentifikatsiya qilinganmi, tekshirish
  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }
}
