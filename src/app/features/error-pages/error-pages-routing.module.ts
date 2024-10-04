import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'access-denied', component: AccessDeniedComponent }, // Access Denied sahifasi uchun marshrut
  { path: 'not-found', component: NotFoundComponent }, // Not Found sahifasi uchun marshrut
  { path: '', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Marshrutlarni child sifatida yuklash
  exports: [RouterModule],
})
export class ErrorPagesRoutingModule {}
