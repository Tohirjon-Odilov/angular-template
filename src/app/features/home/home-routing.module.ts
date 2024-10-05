import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoleGuard } from '../../core/guards/role.guard';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard, RoleGuard], // HomeComponent ni AuthGuard va RoleGuard orqali himoya qilish
    // data: { roles: ['designer', 'director'] }, // Foydalanuvchi ro'lini tekshirish
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
