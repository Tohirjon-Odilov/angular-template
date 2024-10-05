import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Formalar uchun modullarni qo'shish
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToastrModule } from 'ngx-toastr'; // Toastr qo'llab-quvvatlash

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    AuthRoutingModule,
    FormsModule,              // Template-driven formalar uchun
    ReactiveFormsModule,       // Reactive formalar uchun
    ToastrModule.forRoot()     // Toastr qo'llab-quvvatlash (agar kerak bo'lsa)
  ]
})
export class AuthModule { }
