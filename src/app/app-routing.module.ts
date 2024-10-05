import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; // Layout component import
import { RoleGuard } from './core/guards/role.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { ROLES } from './config/constants';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  }, // Auth moduli uchun lazy load
  {
    path: '', // Layout orqali yuklanadigan barcha marshrutlar
    component: LayoutComponent,
    // canActivate: [AuthGuard, RoleGuard], // Layout ichidagi barcha marshrutlarni AuthGuard orqali himoya qilish
    // data: { roles: [ROLES.ADMIN] }, // Foydalanuvchining roliga ko'ra himoya
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.module').then((m) => m.HomeModule),
        // canActivate: [AuthGuard, RoleGuard], // Home sahifasini Role va Auth guard orqali himoya qilish
        // data: { roles: [ROLES.ADMIN, ROLES.USER] }, // Foydalanuvchining roliga ko'ra himoya
      }, // Home moduli uchun lazy load
    ],
  },{
    path: 'error-pages',
    loadChildren: () =>
      import('./features/error-pages/error-pages.module').then(
        (m) => m.ErrorPagesModule
      ),
  },
  {
    path: '**',
    redirectTo: '/error-pages/not-found'  // Barcha noma'lum marshrutlar uchun NotFound sahifasiga yo'naltirish
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
