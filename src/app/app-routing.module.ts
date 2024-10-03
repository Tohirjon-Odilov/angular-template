import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
// import { Feature2Component } from './features/feature2/components/feature2.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,  // LayoutComponent orqali sahifalarni yuklash
    children: [
      { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
      // { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
    ]
  },
  { path: '**', redirectTo: 'home' }  // Default yo'nalish
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
