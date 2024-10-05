import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { AuthService } from '../../services/auth.service';
// import jwtDecode from 'jwt-decode';
import { AuthService } from '../../../../core/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService,
    // private cookieService: CookieService,
  ) {
    localStorage.clear(); // Har safar login sahifasiga kelinganda localStorage tozalanadi
  }

  ngOnInit(): void {
    // Login formani validatsiya bilan yaratish
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (!navigator.onLine) {
      this.toaster.error('Siz internetga ulanmagansiz!', 'Tarmoq xatosi');
      return; // Internet yo'q bo'lsa, jarayonni to'xtatish
    }
    
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      // AuthService orqali login qilish
      this.authService.login(formData).subscribe({
        next: (data) => {
          // Tokenni decode qilish
          // const decodedToken: any = jwtDecode(data.access);
          // const expirationDate = new Date(decodedToken.exp * 1000);

          // Cookie yoki localStorage orqali foydalanuvchi ma'lumotlarini saqlash
          const userData = {
            token: data.access,
            is_designer: data.is_designer,
            is_director: data.is_director,
          };
          localStorage.setItem('userData', JSON.stringify(userData));

          // Foydalanuvchi roliga ko'ra yo'naltirish
          if (data.is_designer) {
            this.router.navigate(['/']);
          } else if (data.is_director) {
            this.router.navigate(['/']);
          }

          this.toaster.success("Xush kelibsiz.", `Tasdiqlandi`);
        },
        error: (err) => {
          if (err.status === 401) {
            this.toaster.error("Foydalanuvchi nomi yoki parol noto'g'ri.", "Xatolik");
          } else {
            this.toaster.error(err.message, "Error");
          }
        },
      });
    }
  }
}
